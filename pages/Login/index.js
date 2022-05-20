import React, {useState} from 'react';
import TextInput from '../../components/TextInput';
import { Wrapper, Title, Header, Main, Column, Image, Text} from './style';
import theme from '../../global/theme';
import {RoundBtn} from '../../global/DefaultSyle';
import { TouchableOpacity } from 'react-native';
import { emailValidator, passwordValidator} from '../../utils';

export default function Login({navigation}){
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

  }

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
        
        <RoundBtn onPress={onLoginPressed} disabled={loading}>
            <Text fontSize={theme.fontsSize.medium} fontFamily={theme.fontsFamily.text_Bold} color={theme.colors.text_000} >{loading ? "Carregando..." : "ENTRAR"}</Text>
        </RoundBtn>

        <TouchableOpacity onPress={() => console.log('auuu')}>
            <Text fontSize={theme.fontsSize.extrasmall} fontFamily={theme.fontsFamily.text_Regular} color={theme.colors.text_900}>RECUPERAR SENHA</Text>
        </TouchableOpacity>

        <Column>
            <Text fontSize={theme.fontsSize.small} fontFamily={theme.fontsFamily.text_Regular} color={theme.colors.text_900}>Novo por aqui? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text fontSize={theme.fontsSize.small} fontFamily={theme.fontsFamily.text_Bold} color={theme.colors.primary_900}>Cadastre-se</Text>
            </TouchableOpacity>
        </Column>
  
      </Main>
    </Wrapper>
  );
}