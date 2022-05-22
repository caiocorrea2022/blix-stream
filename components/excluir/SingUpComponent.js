
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, FlatList, Dimensions} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import { HelperText, TextInput} from 'react-native-paper';
import Colors from '../../styles/Colors';


export default function SingUpComponent() {
    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState(null)
    const [nickName, setNickName] = useState("");
    const [errornickName, setErrornickName] = useState(null)
    const [location, setLocation] = useState("");
    const [errorlocation, setErrorLocation] = useState(null)
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [errordate, setErrorDate] = useState(null)
    const [hourOfBirth, sethourOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(null)
    const [instagram, setInstagram] = useState("");
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
    const [cellphone, setCellPhone] = useState("");
    const [errorcellphone, setErrorcellphone] = useState(null);
    const [isSelected, setSelected] = useState(false);
    const [priceStripe, setPriceStripe] = useState("");
    const [plans, setPlans] = useState({});
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
    
                <View style={styles.divSuperior}>
                    <Text>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu nome completo"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        type="text"
                        returnKeyType='next'
                        onChange={({ target: { value } }) => { setName(value); setErrorName(null) }}
                        value={name}
                        onEndEditing={() => this.passTextInput.focus()}
                    />
                    <HelperText type="error" visible={errorName} style={styles.error}>{errorName}</HelperText>
                    <Text>Apelido</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o seu apelido"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        type="text"
                        returnKeyType='next'
                        onChange={({ target: { value } }) => { setNickName(value); setErrornickName(null) }}
                        value={nickName}
                        onEndEditing={() => this.passTextInput.focus()}
                    />
                    <HelperText type="error" visible={errornickName} style={styles.error}>{errornickName}</HelperText>
                    <Text>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Brasil/RS/Porto Alegre"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        type="text"
                        returnKeyType='next'
                        onChange={({ target: { value } }) => { setLocation(value); setErrorLocation(null) }}
                        value={location}
                        onEndEditing={() => this.passTextInput.focus()}
                    />
                    <HelperText type="error" visible={errorlocation} style={styles.error}>{errorlocation}</HelperText>
                    <Text>Data de Nascimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/YYYY"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        render={(props) => (
                            <TextInputMask
                                {...props}
                                value={dateOfBirth}
                                type={'datetime'}
                                options={{ format: 'DD/MM/YYYY' }}
                                keyboardType="number-pad"
                                returnKeyType='next'
                                onChange={({ target: { value } }) => { setdateOfBirth(value); setErrorDate(null) }}
                                onEndEditing={() => this.passTextInput.focus()}
                            />
                        )}
                    />
                    <HelperText type="error" visible={errordate} style={styles.error}>{errordate}</HelperText>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="usuario@exemplo.com"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        keyboardType='email-address'
                        type="text"
                        returnKeyType='next'
                        onChange={({ target: { value } }) => { setEmail(value); setErrorEmail(null) }}
                        value={email}
                    />
                    <HelperText type="error" visible={errorEmail} style={styles.error}>{errorEmail}</HelperText>
                    <Text>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="(DDD) 99999-9999"
                        error={false}
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        render={(props) => (
                            <TextInputMask
                                {...props}
                                value={cellphone}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                keyboardType="phone-pad"
                                returnKeyType='next'
                                onChange={({ target: { value } }) => { setCellPhone(value); setErrorcellphone(null) }}
                                onEndEditing={() => this.passTextInput.focus()}
                            />
                        )}
                    />
                    <HelperText type="error" visible={errorcellphone} style={styles.error}>{errorcellphone}</HelperText>
                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="********"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        type="text"
                        keyboardType='default'
                        returnKeyType='next'
                        onChange={({ target: { value } }) => setPassword(value)}
                        value={password}
                    />
                    <HelperText type="error" visible={errorPassword} style={styles.error}>{errorPassword}</HelperText>
                    <Text>Confirme a senha</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="********"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        returnKeyType='go'
                        keyboardType='default'
                        type="text"
                        onChange={({ target: { value } }) => setConfirmPassword(value)}
                        value={confirmPassword}
                    />
                    <HelperText type="error" visible={errorConfirmPassword} style={styles.error}>{errorConfirmPassword}</HelperText>
                    <Text>Instagram</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="@exemplo"
                        outlineColor={Colors.background}
                        activeOutlineColor={Colors.primary}
                        keyboardType='text'
                        returnKeyType='next'
                        onChange={({ target: { value } }) => setInstagram(value)}
                        value={instagram}
                    />
                </View>


                <View style={{ height: 30 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:Colors.background,
    },
    title: {
      fontSize:18,
      color:Colors.background,
      marginVertical:5,
      alignItems:'center',
      alignSelf:'center'
    },
    divSuperior:{
      flex:1,
      alignItems: 'center',
      backgroundColor:Colors.background,
    },
    divInferior:{
      flex:1,
      alignItems: 'center',
      marginTop:20
    },
    input: {
      marginTop:5,
      height:40,
      width: '95%',
      backgroundColor:Colors.background,
      fontSize:14,
    },
    buttonLogin:{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.primary,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      marginVertical: 15,
      padding:10,
    },
    textButtonLogin:{
      color:Colors.background,
      fontWeight:'bold',
      fontSize:16
    },
    error:{
      color: Colors.error,
      fontSize: 12,
      alignSelf:'flex-start',
      marginLeft:10
    },
    prices: {
      margin: 5,
      marginTop: 10,
      alignItems:'center',
    },
    item: {
      alignContent:'center',
      alignItems: "center",
      flex: 1,
      margin: 4,
      marginBottom:20,
      padding: 5,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      flexBasis:0
    },
    textPlano:{
      fontSize:14,
      textAlign:'center'
    },
    textPreco:{
      fontSize:12,
      marginTop:2,
      fontWeight:'bold',
      textAlign:'center'
    },
    });