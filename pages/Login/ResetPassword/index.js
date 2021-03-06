import React, { useState } from 'react';
import { Container, FormMessage, ViewButton, ViewText, ViewHelper, ViewTextInput } from './style';
import { emailValidator } from '../../../utils';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { auth } from '../../../services/firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { HelperText } from 'react-native-paper';
import { SubTitle } from '../../../config/theme/globalStyles';
import { SafeAreaView } from "react-native";

export function ResetPassword() {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const onResetPressed = () => {
    const emailError = emailValidator(email.value);
    setLoading(true);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      setLoading(false);
      return;
    }
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        setResult('Enviamos um e-mail de recuperação de senha para este email.');
      })
      .catch((e) => {
        console.log(e);
        switch (e.code) {
          case 'auth/user-not-found':
            setError('Usuário não cadastrado. Verifique se o email está correto.');
            break;
          case 'auth/invalid-email':
            setError('E-mail inválido.');
            break;
          case 'auth/user-disabled':
            setError('Usuário desabilitado.');
            break;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <SafeAreaView>
      <Container>
        <SubTitle textAlign="flex-start" margin="0rem 0rem 2rem 0rem">Redefina a sua senha:</SubTitle>
        <ViewTextInput>
          <ViewText>
            <TextInput
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={text => setEmail({ value: text, error: '' })}
              error={!!email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          </ViewText>
          <ViewHelper>
            <HelperText type="error" visible={email.error}>{email.error}</HelperText>
          </ViewHelper>
        </ViewTextInput>
        <ViewButton>
          <Button
            title={'Enviar'}
            isLoading={loading}
            onPress={onResetPressed}
          ></Button>
        </ViewButton>
        <ViewButton>
          {
            error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )
          }
          {
            result && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {result}
              </FormMessage>
            )
          }
        </ViewButton>
      </Container >
    </SafeAreaView>
  );
}