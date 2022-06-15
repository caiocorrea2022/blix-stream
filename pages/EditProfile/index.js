// import React, { useContext } from 'React';
// import { Text } from 'react-native';
// import Header from '../../components/Header';
// import {Container} from './style';
// // import {AuthContext} from '../../hooks/auth';

// export default function EditProfile({ navigation }) {
//   // const {user} = useContext(AuthContext)
//     return (
//       <Container>
//         <Header goBack={navigation.goBack}/>
//         {/* <Text>Article Screen{user.email}</Text> */}
//       </Container>
//     );
//   }

import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { TextInput} from 'react-native-paper';
import { doc, setDoc, getDoc} from "firebase/firestore";
import {firestore} from '../../services/firebase'
import 'firebase/functions';
import { getFunctions, httpsCallable } from "firebase/functions";

const auth = getAuth();
const functions = getFunctions();

export default function EditProfile ({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellPhone] = useState("");
    const [user, setUser] = useState(auth.currentUser);

    const getUsers = async (user) => {
        const docRef = doc(firestore, "users", user);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const userProfile = {
                id: docSnap.id,
                name: docSnap.data().NomeCompleto,
                email: docSnap.data().Email,
                cellphone: docSnap.data().Celular,
            }
            setName(userProfile.name);
            setEmail(userProfile.email);
            setCellPhone(userProfile.cellphone);
            } else {
                console.log("No such document!");
            }
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              getUsers(user.uid);
              setUser(user.uid);
            }
          });
    }, []);

    async function sendToCustomerPortal () {
        const functionRef = httpsCallable(functions,'ext-firestore-stripe-payments-createPortalLink');
            const { data } = await functionRef({
            returnUrl: 'http://loupaz-ec0b1.firebaseapp.com/meuperfil',
            locale: "auto"});
            window.location.assign(data.url);
    }    

    const salvar = () => {
        const userRef = doc(firestore, "users", user);
        setDoc(userRef, { 
            NomeCompleto: name,
            Celular: cellphone,
        }, { merge: true })
        .then(()=>{
            alert('Dados salvos com sucesso.')
        })
        .catch((e)=> {
            console.log('EditProfile, salvar: ' + e);
        });
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
          <ScrollView style={{flex: 1}}>
          <Header goBack={navigation.goBack}/>
            <View style={styles.divSup}>
                <Text style={styles.titleTop}>Meu Perfil</Text>
            </View>
            <View style={styles.divInf}>

            <View style={styles.box}>
                <Text style={styles.textTitle}>Detalhes do Plano:</Text>
                <TouchableOpacity 
                style={styles.textEditar}
                onPress={sendToCustomerPortal}>
                    <Text>Alterar ou Cancelar meu plano</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
            <Text style={styles.textTitle}>Alterar informações:</Text>
            <Text style={styles.input}>Não esqueça de salvar suas alterações!</Text>
                <Text style={styles.text}>Nome Completo:</Text>
                <TextInput
                    style={styles.input}
                    activeUnderlineColor={"green"}
                    placeholder="Nome"
                    keyboardType='default'
                    returnKeyType='go'
                    onChangeText={(t) => setName(t)}
                    value={name}
                />
                <Text style={styles.text}>Email:</Text>
                <TextInput
                    style={styles.input}
                    activeUnderlineColor={"green"}
                    placeholder="Email"
                    keyboardType='email-address'
                    editable={false}
                    value={email}
                />
                <Text style={styles.text}>Celular:</Text>
                <TextInput
                    style={styles.input}
                    activeUnderlineColor={"green"}
                    placeholder="(DDD)99999-9999"
                    keyboardType='default'
                    returnKeyType='go'
                    onChangeText={(t) => setCellPhone(t)}
                    value={cellphone}
                />
            </View>
            <View>
                <TouchableOpacity 
                    style={styles.buttonSave}
                    onPress={salvar}>
                    <Text>Salvar alterações</Text>
                </TouchableOpacity>
            </View>  
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:"white",
},
divSup:{
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent:'center',
    padding:10,
},
divInf:{
    flex:1,
    alignItems: 'center',
},
box:{
    backgroundColor:"white",
    borderRadius:15, 
    paddingHorizontal:10, 
    marginVertical:10,
    paddingVertical:10,
    width:'95%'
    },
titleTop:{
    paddingHorizontal:2,
    textAlign:'center',
    fontSize:18,
    color:"gray"
    },
text:{
    fontSize:14,
    alignSelf:'flex-start',
    color: "gray",
    fontWeight:'bold', 
    marginTop:8
},
textTitle:{
    fontSize:15,
    alignSelf:'flex-start',
    color: "gray",
    fontWeight:'bold', 
    marginTop:8
},
input:{
    width: "100%",
    backgroundColor: "white",
    height: 40,
    fontSize:14,
    color: "gray",
    alignSelf:'flex-start',
},
buttonSave:{
    backgroundColor: "green",
    borderRadius:15,
    flex:1,
    padding: 10,
    marginBottom: 20,
    alignItems:'center',
    justifyContent:'center'
},
textEditar:{
    fontSize:14,
    alignItems:'flex-start',
    marginVertical:8,
    color: "gray",
    textDecorationLine:'underline',
},
})