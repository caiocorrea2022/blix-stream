import React, { useState, useContext } from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { View } from 'react-native';
import { Container, SideView, Content, Image, Title, ViewHeader, ContainerSideView } from './style';
import { emailValidator, passwordValidator } from '../../utils';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../hooks/auth';
import ResetPassword from './ResetPassword';
import TouchableText from '../../components/TouchableText'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import AlertBox from '../../components/AlertBox'
import Header from '../../components/Header';
import ViewPortProvider from '../../components/MobileOrDesktop/ViewPortProvider';
import useViewport from '../../components/MobileOrDesktop/useViewport';
import { HelperText} from 'react-native-paper';
import THEME from '../../config/theme';

export default function Login({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', margin: "2rem", padding: "1rem" };
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [title, setTitle] = useState(null)
  const [message, setMessege] = useState(null)

  const { signIn } = useContext(AuthContext);

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
        } else {navigation.navigate('DrawerNavigator')}
      })
      .catch((error) => {
        console.log(error.code)
        switch (error.code) {
          case 'auth/user-not-found':
            showAlert("Erro", "Usuário não cadastrado.");
            break;
          case 'auth/wrong-password':
            showAlert("Erro", "Senha incorreta");
            break;
          case 'auth/invalid-email':
            showAlert("Erro", "E-mail inválido");
            break;
          case 'auth/user-disabled':
            showAlert("Erro", "Usuário desabilitado");
            break;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const MobileOrDesktopComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
 
    return width < breakpoint ? <View></View> : <SideView></SideView>;
  };

  return (
    <Provider>
     <ViewPortProvider>
       <ContainerSideView>
         <MobileOrDesktopComponent></MobileOrDesktopComponent>
      <Container>
        <ViewHeader>
          <Header goBack={navigation.goBack} />
        </ViewHeader>
        
        <Content>
          <Image source={require('./../../assets/yoga-logo.jpg')}></Image>
          <Title>YOGA LUZ</Title>
      
          <TextInput
            label='Email'
            placeholder="Digite seu email"
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
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => setPassword({ value: text, error: '' })}
            error={!!password.error}
            secureTextEntry={true}
            autoCorrect={false}
          />
          <HelperText type="error" visible={password.error}>{password.error}</HelperText>

          <Button title={'ENTRAR'} isLoading={loading} onPress={onLoginPressed}></Button>

          {visibleAlert &&
            <AlertBox title={title} message={message} visible={visibleAlert} onClose={hideAlert}></AlertBox>
          }
          <TouchableText onPress={showModal} title={'RECUPERAR SENHA'}></TouchableText>
        </Content>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <ResetPassword></ResetPassword>
          </Modal>
        </Portal>
      </Container>
      <MobileOrDesktopComponent></MobileOrDesktopComponent>
      </ContainerSideView>
      </ViewPortProvider>
    </Provider>
  );
}
