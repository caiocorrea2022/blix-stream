import React, {useState} from 'react';
import TextInput from '../TextInput';
import { Wrapper, Title, Main, Text} from './style';
import colors from '../../styles/colors';
import {RoundBtn} from '../../styles/DefaultSyle';
import fonts from '../../styles/fonts';
import { emailValidator, passwordValidator, nameValidator} from '../../utils';

export default function SignUp({navigation}){
    
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
    
        if (emailError || passwordError || nameError) {
          setName({ ...name, error: nameError });
          setEmail({ ...email, error: emailError });
          setPassword({ ...password, error: passwordError });
          return;
        }
        return !error
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
        
        <RoundBtn onPress={onSignUpPressed}>
            <Text fontSize={fonts.title} fontWeight={'bold'} color={colors.background}>Cadastrar</Text>
        </RoundBtn>
  
      </Main>
    </Wrapper>
  );
}