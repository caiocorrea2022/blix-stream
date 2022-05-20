import React, {useState} from 'react';
import TextInput from '../../components/TextInput';
import { Wrapper, Title, Main, Text} from './style';
import theme from '../../global/theme';
import {RoundBtn} from '../../global/DefaultSyle';
import { emailValidator, passwordValidator, nameValidator} from '../../utils';

export default function SignUp({navigation}){
    
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);

    const onSignUpPressed = () => {
      setLoading(true);
      const nameError = nameValidator(name.value);
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);
    
        if (emailError || passwordError || nameError) {
          setName({ ...name, error: nameError });
          setEmail({ ...email, error: emailError });
          setPassword({ ...password, error: passwordError });
          setLoading(false);
          return;
        }

        navigation.navigate('Login');
    };

  return (
    <Wrapper>
      <Main>
        <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={text => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
        />

        <TextInput
            label="Email"
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
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
        />
        
        <RoundBtn onPress={onSignUpPressed} disabled={loading}>
            <Text fontSize={theme.fontsSize.medium} fontFamily={theme.fontsFamily.text_Bold} color={theme.colors.background}>{loading ? 'Carregando...' : "Cadastrar"}</Text>
        </RoundBtn>
  
      </Main>
    </Wrapper>
  );
}