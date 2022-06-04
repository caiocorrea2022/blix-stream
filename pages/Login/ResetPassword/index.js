import React, {useState} from 'react';
import { Wrapper, Title, FormMessage} from './style';
import { emailValidator } from '../../../utils';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { auth } from '../../../services/firebase';
import { sendPasswordResetEmail} from "firebase/auth";

const ResetPassword = ({navigation}) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
	const [result, setResult] = useState(null);

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
        switch(e.code){
            case 'auth/user-not-found':
                setError('Usuário não cadastrado.');
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
    <Wrapper>
        <Title>Redefina sua senha</Title>
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

        <Button title={'ENVIAR'} isLoading={loading} onPress={onResetPressed}></Button>

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
    </Wrapper>
  );
}

export default ResetPassword