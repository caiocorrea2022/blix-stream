import React, { useState, useEffect } from 'react'
import { TextInput, HelperText } from 'react-native-paper';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import Colors from '../../styles/Colors';
import { Icon } from 'react-native-elements'

export default function LoginComponent({navigation}) {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(null);


    return (
        <KeyboardAvoidingView
            style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.divSuperior}>
                    <Image
                        style={styles.image}
                        source={require('../assets/yoga-logo.jpg')}
                    />
                    <Text style={styles.title}>
                            YOGA LALA
                    </Text>
                    <View style={styles.divInput}>
                        <Text style={styles.textInput}>
                            EMAIL
                        </Text>
                        <TextInput
                            style={styles.input}
                            autoCorrect={false}
                            placeholder="Digite seu email"
                            keyboardType='email-address'
                            underlineColor={Colors.primary}
                            activeUnderlineColor={Colors.primary}
                            outlineColor={Colors.text}
                            activeOutlineColor={Colors.primary}
                            returnKeyType='next'
                            onChange={({ target: { value } }) => {
                                setEmail(value)
                                setErrorEmail(null)
                            }}
                            value={email}
                        //onEndEditing={()=>this.passTextInput.focus()}
                        />
                        <HelperText type="error"
                            visible={errorEmail}
                            style={styles.error}
                            padding='none'>
                            {errorEmail}
                        </HelperText>

                        <Text style={styles.textInput}>
                            SENHA
                        </Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            keyboardType='default'
                            returnKeyType='go'
                            placeholder="Digite sua senha"
                            underlineColor={Colors.primary}
                            activeUnderlineColor={Colors.primary}
                            outlineColor={Colors.text}
                            activeOutlineColor={Colors.primary}
                            type="text"
                            onChange={({ target: { value } }) => {
                                setPassword(value)
                                setErrorPassword(null)
                            }}
                            value={password}
                        />
                        <HelperText type="error" visible={errorPassword} style={styles.error} padding='none'>
                            {errorPassword}
                        </HelperText>

                        <TouchableOpacity style={styles.buttonLogin} onPress={console.log('lala')}>
                            <Text style={styles.textButtonLogin}>ENTRAR</Text>
                        </TouchableOpacity>
                        <Text style={styles.textEsqueceuSenha} onPress={() => console.log('auuu')} >
                            Esqueceu sua senha?
                        </Text>
                    </View>
                </View>

                <View style={styles.divInferior}>
                    <View style={styles.divOuHr}>
                        <Text style={styles.textOu}>É Novo Por Aqui?</Text>
                    </View>
                    <View style={styles.divCadastrarSe}>
                        <TouchableOpacity
                            style={styles.buttonSingUp}
                            onPress={() => navigation.navigate('Singup')}>
                            <Text style={styles.textCadastrar}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.background
    },
    divSuperior: {
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    divInput: {
        borderRadius: 10,
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        textAlign: 'left',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    divInferior: {
        marginTop: '3%'
    },
    image: {
        marginTop: 20,
        width: 160,
        height: 160,
        marginBottom: 20,
        borderRadius: 200,
    },
    input: {
        marginTop: 0,
        height: 50,
        width: '100%',
        marginBottom: 10,
        backgroundColor: Colors.background,
        borderBottomColor: Colors.primary,
        fontSize: 16,
    },
    buttonLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
        width: '70%',
        borderRadius: 15,
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonSingUp: {
        width: 150,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    textButtonLogin: {
        color: Colors.background,
        fontWeight: 'bold',
        fontSize: 16
    },
    textEsqueceuSenha: {
        fontSize: 14,
        marginTop: 10,
        color: Colors.text,
        textDecorationLine: 'underline',
    },
    divOuHr: {
        width: '100%',
        alignItems: 'center',
    },
    divHr: {
        width: '25%',
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1
    },
    textOu: {
        marginHorizontal: 20,
        fontSize: 18,
        color: Colors.text,
    },
    divCadastrarSe: {
        alignItems: 'center',
        marginBottom: 10
    },
    textCadastrar: {
        fontSize: 14,
        color: Colors.background,
    },
    error: {
        color: Colors.error,
        fontSize: 12,
    }
})