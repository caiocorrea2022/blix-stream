import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Content, Image, Header, Title, Wrapper} from './style';
import ResetPassword from './ResetPassword';
import TouchableText from '../../components/TouchableText'
import { Modal, Portal, Provider } from 'react-native-paper';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import AlertBox from '../../components/AlertBox'
import { emailValidator, passwordValidator} from '../../utils';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword} from "firebase/auth";


export default function Login({navigation}){

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: "2rem", padding: "1rem"};
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [title, setTitle] = useState(null)
  const [message, setMessege] = useState(null)

  const showAlert = (title, message) => {
    setVisibleAlert(true)
    setTitle(title)
    setMessege(message)
  }

  const hideAlert = (status) => {
    setVisibleAlert(status)
  }

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
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified===false) {
        showAlert("Erro","E-mail não verificado. Confira sua caixa de entrada.");
      } else {navigation.navigate('Home')}
    })
    .catch((error) => {
    console.log(error.code)
    switch(error.code){
      case 'auth/user-not-found':
        showAlert("Erro","Usuário não cadastrado.");
        break;
      case 'auth/wrong-password':
        showAlert("Erro","Senha incorreta");
        break;
      case 'auth/invalid-email':
        showAlert("Erro","E-mail inválido");
        break;
      case 'auth/user-disabled':
        showAlert("Erro","Usuário desabilitado");
        break;
    }
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const viewportContext = React.createContext({});

  const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const LoginComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <View/> : <View style={{ backgroundColor: "blue", flex: 0.5 }} />;
};
 
  return (
    <Provider>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
            <Header>
              <Image source={require('./../../assets/yoga-logo.jpg')}></Image>
              <Title>YOGA LUZ</Title>
            </Header>
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

              { visibleAlert && 
              <AlertBox title={title} message={message} visible={visibleAlert} onClose={hideAlert}></AlertBox>
              }
           </Wrapper>
            <TouchableText onPress={showModal} title={'RECUPERAR SENHA'}></TouchableText>
            <TouchableText onPress={() => navigation.navigate('Cadastro')} title={'Cadastre-se'}></TouchableText>
          </Content>
          
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <ResetPassword></ResetPassword>
            </Modal>
          </Portal>
        </KeyboardAvoidingView>
      </Container>
    </Provider>
  );
}
