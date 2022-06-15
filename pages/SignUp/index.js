import React, { useState } from 'react';
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from '../../components/Header';
import {
  Content,
  BackButton,
  Footer,
  ViewTextInput,
  ViewButton,
  ViewCheckBox,
  ViewText,
  ViewHelper,
  ViewTitle
} from "./style";
import THEME from '../../config/theme';
import { Provider } from "react-native-paper";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import { emailValidator, passwordValidator, nameValidator, cellphoneValidator } from "../../utils";
import {
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from '../../services/firebase';
import AlertBox from "../../components/AlertBox";
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import ViewPortProvider from '../../hooks/MobileOrDesktop/ViewPortProvider';
import useViewport from '../../hooks/MobileOrDesktop/useViewport';
import { HelperText } from 'react-native-paper';
import { Container, ContainerSideView, SideView, SmallText, Title } from '../../config/theme/globalStyles';

export default function SignUp({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });
  const [cellphone, setCellPhone] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [title, setTitle] = useState(null);
  const [message, setMessege] = useState(null);


  const showAlert = (title, message) => {
    setVisibleAlert(true);
    setTitle(title);
    setMessege(message);
  };

  const hideAlert = (status) => {
    setVisibleAlert(status);
  };


  const validation = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = passwordValidator(confirmPassword.value);
    const cellphoneError = cellphoneValidator(cellphone.value);

    if (emailError || passwordError || nameError || cellphoneError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
      setCellPhone({ ...cellphone, error: cellphoneError });
      setLoading(false);
      return;
    }

  };

  const onSignUpPressed = () => {
    validation();
    if (password.value === confirmPassword.value) {
      if (isSelected === false) {
        showAlert("Erro", "Para prosseguir você precisa estar de acordo com os Termos de Uso e a Política de Privacidade.");
      }
      else if (email.value && password.value && name.value && cellphone.value) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email.value, password.value, cellphone.value)
          .then((currentUser) => {
            console.log("user criado");
            const user = currentUser.user;
            const usersCollectionRef = doc(firestore, "users", user.uid);
            const createUser = async () => {
              await setDoc(usersCollectionRef, {
                Nome_Completo: name.value,
                Email: email.value,
                Celular: cellphone.value
              });
              console.log('user criado')
              console.log(user)
            };
            createUser().then(() => {
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  signOut(auth)
                    .then(() => {
                      createCheckoutSession(user.uid, "price_1L5qw3CmcyIwF9rcW6VuPvSg", "subscription", 6);
                    });
                });
            });
          })
          .catch((error) => {
            setLoading(false);
            console.error(error);
            switch (error.code) {
              case "auth/email-already-in-use":
                showAlert("Erro", "Este email já está cadastrado");
                break;
              case "auth/weak-password":
                showAlert("Erro", "Senha deve conter pelo menos 6 caracteres");
                break;
              case "auth/invalid-email":
                showAlert("Erro", "Email inválido");
                break;
              case "auth/operation-not-allowed":
                showAlert("Erro", "Problemas ao cadastrar o usuário.");
                break;
            }
          });
      }
    }
    else {
      showAlert("Erro", "As senhas não correspondem");
      setLoading(false);
    }
  }

  const MobileOrDesktopComponent = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? <View></View> : <SideView flex="0.9"></SideView>;
  };


  return (
    <Provider>
      <ViewPortProvider>
        <ContainerSideView>
          <Container>
            <Header goBack={navigation.goBack} />
            <ViewTitle>
              <Title textAlign="flex-start" padding="0rem 0rem 0rem 1rem">Cadastrar</Title>
            </ViewTitle>
            <Content>
              <ViewTextInput>
                <ViewText>
                  <TextInput
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={(text) => setName({ value: text, error: "" })}
                    error={!!name.error}
                  />
                </ViewText>
                <ViewHelper>
                  <HelperText type="error" visible={name.error}>{name.error}</HelperText>
                </ViewHelper>
              </ViewTextInput>
              <ViewTextInput>
                <ViewText>
                  <TextInput
                    label="Email"
                    placeholder="Digite seu email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: "" })}
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
                    label="Celular"
                    placeholder="(DDD) 99999-9999"
                    returnKeyType="done"
                    value={cellphone.value}
                    onChangeText={(text) => setCellPhone({ value: text, error: "" })}
                    error={!!cellphone.error}
                    keyboardType="phone-pad"
                  />
                </ViewText>
                <ViewHelper>
                  <HelperText type="error" visible={cellphone.error}>{cellphone.error}</HelperText>
                </ViewHelper>
              </ViewTextInput>
              <ViewTextInput>
                <ViewText>
                  <TextInput
                    label="Senha"
                    placeholder="Digite uma senha"
                    returnKeyType="next"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: "" })}
                    error={!!password.error}
                    secureTextEntry
                  />
                </ViewText>
                <ViewHelper>
                  <HelperText type="error" visible={password.error}>{password.error}</HelperText>
                </ViewHelper>
              </ViewTextInput>
              <ViewTextInput>
                <ViewText>
                  <TextInput
                    label="Confirmar Senha"
                    placeholder="Digite novamente a senha"
                    returnKeyType="next"
                    value={confirmPassword.value}
                    onChangeText={(text) => setConfirmPassword({ value: text, error: "" })}
                    error={!!confirmPassword.error}
                    secureTextEntry
                  />
                </ViewText>
                <ViewHelper>
                  <HelperText type="error" visible={confirmPassword.error}>{confirmPassword.error}</HelperText>
                </ViewHelper>
              </ViewTextInput>

            </Content>
            <ViewCheckBox>
              <CheckBox
                title="Clicando nesta caixa você concorda com os Termos de Uso e Política de Privacidade."
                center={false}
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
              />
            </ViewCheckBox>
            <ViewButton>
              <Button
                title={"Prosseguir para pagamento"}
                isLoading={loading}
                onPress={onSignUpPressed}
                colorbutton={THEME.COLORS.PRIMARY_900}
                colortitle={THEME.COLORS.BACKGROUND}
              ></Button>
            </ViewButton>
            {visibleAlert &&
              <AlertBox
                title={title}
                message={message}
                visible={visibleAlert}
                onClose={hideAlert}
              ></AlertBox>
            }
            <Footer>
              <BackButton onPress={() => navigation.navigate("Login")}>
                <MaterialIcons
                  name="arrow-back"
                  size={24}
                  color={THEME.COLORS.PRIMARY_900}
                />
              </BackButton>
              <SmallText color={THEME.COLORS.PRIMARY_900}>Eu já tenho uma conta</SmallText>
            </Footer>
          </Container>
          <MobileOrDesktopComponent></MobileOrDesktopComponent>
        </ContainerSideView>
      </ViewPortProvider>
    </Provider>
  );
}
