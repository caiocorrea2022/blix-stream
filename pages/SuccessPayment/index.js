import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  userEmail,
  Linking,
} from "react-native";
import { Icon } from "react-native-elements";
import { firestore } from "../../services/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const auth = getAuth();

export default function Success({ navigation }) {
  //   const getUsers = async (user) => {
  //     const docRef = doc(firestore, "users", user);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //     console.log("GetUser-Document data:", docSnap.data());
  //     } else {
  //     console.log("GetUser-Document data: No such document!");
  //     }
  // }

  //   useEffect(()=>{
  //     onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //           getUsers(user.uid);
  //         }
  //       });
  // }, []);

  const getSessionId = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");

    console.log('lag', sessionId);

    const session = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
      }
    })
    .then((r) => r.json());

    const subId = session.subscription;
    
    const schedule = await fetch(`https://api.stripe.com/v1/subscription_schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
      },
      body: JSON.stringify({
        from_subscription: `${subId}`,
      })
    })
    .then((r) => r.json());

    console.log('schedule', schedule);

        
    const iterations = await fetch(`https://api.stripe.com/v1/subscription_schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
      },
      body: JSON.stringify({
        from_subscription: `${subId}`,
        //criar as phases
      })
    })
    .then((r) => r.json());
  }

  useEffect(() => {


    // const getSessionId = async () => {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const sessionId = urlParams.get("session_id");

    //   if (sessionId) {
    //     const session = await fetch(
    //       `/checkout-session?sessionId=${sessionId}`
    //     ).then((r) => r.json());
    //     console.log('oi', session);
    //     var sessionJSON = JSON.stringify(session, null, 2);
    //     console.log(sessionJSON);
    //   }
    // };
    getSessionId();
  }, []);

  return (
    <View>{/* <Text>{sessionJSON}</Text> */}</View>
    // <View style ={styles.container}>
    //   <View style ={styles.divSup}>
    //     <Icon
    //       type ="material-icons"
    //       name = "check-circle-outline"
    //       color= "black"
    //       size ={100}
    //     />
    //     <Text style ={styles.textTitle}>Plano assinado com sucesso!</Text>
    //     <Text style ={styles.text}>Verifique seu e-mail e faça o seu primeiro login.</Text>
    //   </View>

    //   <Text style={styles.textWhatsapp}
    //     onPress={() => Linking.openURL('https://chat.whatsapp.com/FJv5xkli2Fb28NY12gegEB')}>
    //     Acessar grupo do Whatsapp
    //   </Text>

    //   <TouchableOpacity
    //     style={styles.buttonLogin}
    //     // onPress={()=> navigation.navigate("SignIn")}
    //     onPress={()=>
    //       navigation.dispatch(
    //         CommonActions.reset({
    //         index:1,
    //         routes:[{name: 'SignIn'}],
    //     }))}
    //     >
    //     <Text style={styles.textButtonLogin}>Login</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  divSup: {
    marginVertical: HEIGHT * 0.1,
  },
  buttonLogin: {
    width: WIDTH * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 15,
    marginVertical: 20,
    padding: 10,
  },
  textTitle: {
    color: "gray",
    fontSize: 20,
    marginHorizontal: 15,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: "gray",
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 5,
    textAlign: "center",
  },
  textWhatsapp: {
    fontSize: 16,
    margin: 15,
    color: "gray",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  textButtonLogin: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },
});
