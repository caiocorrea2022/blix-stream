import React, { useState } from 'react';
import { Container, FormMessage } from './style';
import { emailValidator } from '../../../utils';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { auth } from '../../../services/firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { HelperText } from 'react-native-paper';
import THEME from '../../../config/theme';
import { SubTitle } from '../../../config/theme/globalStyles';

export default function ResetPassword() {
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
        setResult('Enviamos um e-mail de recuperação de senha este email');
      })
      .catch((e) => {
        console.log(e);
        switch (e.code) {
          case 'auth/user-not-found':
            setError('Usuário não cadastrado. Verifique se o email está correto.');
            break;
          case 'auth/invalid-email':
            setError('E-mail inválido');
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
    <Container>
      <SubTitle textAlign="flex-start" margin="0rem 0rem 2rem 0rem">Redefina a sua senha:</SubTitle>
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
      <HelperText type="error" visible={email.error}>{email.error}</HelperText>

      <Button
        title={'ENVIAR'}
        isLoading={loading}
        onPress={onResetPressed}
        colorbutton={THEME.COLORS.PRIMARY_900}
        colortitle={THEME.COLORS.BACKGROUND}>
      </Button>

      {error && (
        <FormMessage
          variants={messageVariants}
          initial="hidden"
          animate="animate"
          error
        >
          {error}
        </FormMessage>
      )}
      {result && (
        <FormMessage
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {result}
        </FormMessage>
      )}
    </Container>
  );
}