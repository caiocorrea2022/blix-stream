import React, { useState } from 'react';
import TextInput from '../../Controllers/TextInput';
import Button from '../../Controllers/Button';
import { Wrapper, Title } from './style';
import { emailValidator, passwordValidator, nameValidator } from '../../../utils';
import { Alert } from 'react-native';
import { getAuth } from "firebase/auth";

const auth = getAuth();

const SignUpForm = () => {

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


    auth()
      .createUserWithEmailAndPassword(email.value, name.value, password.value)
      .then(() => Alert.alert("Conta", "Cadastrada com sucesso!"))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Wrapper>
      <Title>Cadastrar</Title>
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

      <Button title={'CADASTRAR'} isLoading={loading} onPress={onSignUpPressed}></Button>
    </Wrapper>
  );
}

export default SignUpForm