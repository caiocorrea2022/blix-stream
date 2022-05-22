import React, { useState } from 'react';
import TextInput from '../../Controllers/TextInput';
import Button from '../../Controllers/Button';
import { Wrapper, Title } from './style';
import { emailValidator, passwordValidator, nameValidator } from '../../../utils';
import { sendEmailVerification, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc} from "firebase/firestore";
import { auth, firestore } from '../../../firebase';
import AlertBox from '../../Controllers/AlertBox'

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

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log('user criado')
        const user = userCredential.user;
        const usersCollectionRef = doc(firestore, "users", user.uid);
        const createUser = async () => {
          await setDoc(usersCollectionRef, { 
            Nome_Completo: name.value, 
            Email: email.value,
            });
          <AlertBox title={'oi'} message={'Conta criada com sucesso'}/>
          // alert("Conta", "Cadastrada com sucesso!")
          // console.log('user criado')
        };
        createUser()
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            alert('Foi enviado um e-mail para:\n '+ email +' para verificação.');
            signOut(auth)
          });  
        })
      })
      .catch((error) => {          
        console.error(error);
        switch(error.code){
          case 'auth/email-already-in-use':
            alert("Erro:\nEste e-mail já está cadastrado.");
            break;
          case 'auth/weak-password':
            alert('Erro:\nSenha deve conter pelo menos 6 caracteres');
            break;
          case 'auth/invalid-email':
            alert('Erro:\nE-mail inválido');
            break;
          case 'auth/operation-not-allowed':
            alert('Erro:\nProblemas ao cadastrar o usuário.');
            break;
        }   
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