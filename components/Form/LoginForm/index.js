import React, {useState} from 'react';
import { Wrapper, Footer, Text} from './style';
import TextInput from '../../Controllers/TextInput';
import Button from '../../Controllers/Button';
import { Alert, TouchableOpacity } from 'react-native';
import { emailValidator, passwordValidator} from '../../../utils';
import auth from '@react-native-firebase/auth';
import theme from '../../../global/theme';

const LoginForm = () => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);

    const onLoginPressed = () => {
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);

      setLoading(true);
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        setLoading(false);
        return;
      }
      navigation.navigate('Home');

      // auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then(() => {
      //     Alert.alert("Logado com sucesso!")
      //     console.log('User account created & signed in!');
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
  }

  const forgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
      Alert.alert("Enviamos um email para você")
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }

  return (
    <Wrapper>
        <TextInput
            label="Email"
            placeholder="Digite seu email"
            returnKeyType="next"
            value={email.value}
            onChangeText={text => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
        />

        <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry={true}
            autoCorrect={false}  
        />
        
        <Button title={'ENTRAR'} isLoading={loading} onPress={onLoginPressed}></Button>

        <TouchableOpacity onPress={() => console.log('auuu')}>
            <Text fontSize={theme.fontsSize.extrasmall} fontFamily={theme.fontsFamily.text_Regular} color={theme.colors.text_900}>RECUPERAR SENHA</Text>
        </TouchableOpacity>

        <Footer>
            <Text fontSize={theme.fontsSize.small} fontFamily={theme.fontsFamily.text_Regular} color={theme.colors.text_900}>Novo por aqui? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text fontSize={theme.fontsSize.small} fontFamily={theme.fontsFamily.text_Bold} color={theme.colors.primary_900}>Cadastre-se</Text>
            </TouchableOpacity>
        </Footer>
    </Wrapper>
  );
}

export default LoginForm