import React, {useState} from 'react';
import TextInput from '../TextInput';
import { Wrapper, Title, Header, Main, Column, Image, Text} from './style';
import colors from '../../styles/colors';
import {RoundBtn} from '../../styles/DefaultSyle';
import fonts from '../../styles/fonts';
import { TouchableOpacity } from 'react-native';
import { emailValidator, passwordValidator} from '../../utils';

export default function Login({navigation}){
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
  
    const onLoginPressed = () => {
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);
  
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        return;
      }
  
      navigation.navigate('Home');
    };

  return (
    <Wrapper>
      <Header>
        <Image source={require('./../../assets/yoga-logo.jpg')}></Image>
        <Title>YOGA LUZ</Title>
      </Header>
      <Main>
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
        
        <RoundBtn onPress={onLoginPressed}>
            <Text fontSize={fonts.title} fontWeight={'bold'} color={colors.background} >ENTRAR</Text>
        </RoundBtn>

        <TouchableOpacity onPress={() => console.log('auuu')}>
            <Text fontSize={fonts.alert} color={colors.text} >Esqueci minha senha</Text>
        </TouchableOpacity>

        <Column>
            <Text fontSize={fonts.text} color={colors.text}>Novo por aqui? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text fontSize={fonts.text} fontWeight={'bold'} color={colors.primary}>Cadastre-se</Text>
            </TouchableOpacity>
        </Column>
  
      </Main>
    </Wrapper>
  );
}