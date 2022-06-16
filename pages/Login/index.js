import React, { useState } from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { View } from 'react-native';
import {
  Content,
  Image,
  ViewTextInput,
  ViewButton,
  ViewImage,
  ViewText,
  ViewHelper,
  ViewTitle,
  Poster,
} from './style';
import { emailValidator, passwordValidator } from '../../utils';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import ResetPassword from './ResetPassword';
import TouchableText from '../../components/TouchableText'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import AlertBox from '../../components/AlertBox'
import THEME from '../../config/theme';
import ViewPortProvider from '../../hooks/MobileOrDesktop/ViewPortProvider';
import useViewport from '../../hooks/MobileOrDesktop/useViewport';
import { HelperText } from 'react-native-paper';
import { MainTitle, Container, ContainerSideView, SideView } from '../../config/theme/globalStyles';

const auth = getAuth();

export default function Login({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: THEME.COLORS.BACKGROUND, padding: "2rem", margin: "2rem", alignSelf:"center"};
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
    setPersistence(auth, browserLocalPersistence)
    .then(() => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified === false) {
          showAlert("Erro", "E-mail não verificado. Confira sua caixa de entrada.")
        } else
          navigation.navigate('DrawerNavigatorScreen')
      })
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
    const breakpoint = 1080;
    return width < breakpoint ? <View></View> : <SideView flex="1.2"><Poster source={require('../../assets/FotoLogin.jpg')}></Poster></SideView>;
  };

  return (
    <Provider>
      <ViewPortProvider>
        <ContainerSideView>
          <Container>
            <ViewImage>
              <Image source={require('./../../assets/Logo.jpg')}></Image>
            </ViewImage>
            <ViewTitle>
              <MainTitle>YOGA LUZ</MainTitle>
            </ViewTitle>
            <Content>
              <ViewTextInput>
                <ViewText>
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
                </ViewText>
                <ViewHelper>
                  <HelperText type="error" visible={email.error}>{email.error}</HelperText>
                </ViewHelper>
              </ViewTextInput>
              <ViewTextInput>
                <ViewText>
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
                </ViewText>
                <ViewHelper>
                  <HelperText type="error" visible={password.error}>{password.error}</HelperText>
                </ViewHelper>
              </ViewTextInput>
              <ViewButton>
                <Button
                  title={'ENTRAR'}
                  isLoading={loading}
                  onPress={onLoginPressed}
                  colorbutton={THEME.COLORS.PRIMARY_900}
                  colortitle={THEME.COLORS.TEXT_BUTTON}
                ></Button>
              </ViewButton>
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