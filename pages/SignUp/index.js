import React, { useState } from 'react';
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from '../../components/Header';
import {
  Container,
  Content,
  BackButton,
  BackText,
  Title,
  ContainerSideView,
  SideView,
  Footer,
  ViewHeader
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
import axios from 'axios';
import ViewPortProvider from '../../hooks/MobileOrDesktop/ViewPortProvider';
import useViewport from '../../hooks/MobileOrDesktop/useViewport';
import { HelperText} from 'react-native-paper';

export default function SignUp({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cellphone, setCellPhone] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [title, setTitle] = useState(null);
  const [message, setMessege] = useState(null);
  const googleInfo = {
    Nome: name.value,
    Email: email.value,
  };


  const showAlert = (title, message) => {
    setVisibleAlert(true);
    setTitle(title);
    setMessege(message);
  };

  const hideAlert = (status) => {
    setVisibleAlert(status);
  };

  const onSignUpPressed = () => {
    setLoading(true);
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const cellphoneError = cellphoneValidator(cellphone.value);

    if (emailError || passwordError || nameError || cellphoneError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setCellPhone({ ...cellphone, error: cellphoneError });
      setLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value, cellphone.value)
      .then((userCredential) => {
        console.log("user criado");
        const user = userCredential.user;
        const usersCollectionRef = doc(firestore, "users", user.uid);
        const createUser = async () => {
          await setDoc(usersCollectionRef, {
            Nome_Completo: name.value,
            Email: email.value,
            Celular: cellphone.value
          });
          // alert("Conta", "Cadastrada com sucesso!")
          console.log('user criado')
          console.log(user)
        };
        createUser().then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              showAlert(
                "Cadastro confirmado!",
                "Confira sua caixa de entrada para verificar seu email."
              );
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
    axios.post('https://sheet.best/api/sheets/fa8b5f7a-031b-43be-b1c2-56d16d985edb', googleInfo)
      .then(response => {
        console.log(response);
      })
  };

  const MobileOrDesktopComponent = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

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
              <Title>Cadastrar</Title>
              <TextInput
                label="Nome"
                placeholder="Digite seu nome completo"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: "" })}
                error={!!name.error}
              />
              <HelperText type="error" visible={name.error}>{name.error}</HelperText>

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
              <HelperText type="error" visible={email.error}>{email.error}</HelperText>

              <TextInput
                label="Senha"
                placeholder="Digite uma senha"
                returnKeyType="next"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: "" })}
                error={!!password.error}
                secureTextEntry
              />
              <HelperText type="error" visible={password.error}>{password.error}</HelperText>

              <TextInput
                label="Celular"
                placeholder="(DDD) 99999-9999"
                returnKeyType="done"
                value={cellphone.value}
                onChangeText={(text) => setCellPhone({ value: text, error: "" })}
                error={!!cellphone.error}
                keyboardType="phone-pad"
              />
              <HelperText type="error" visible={cellphone.error}>{cellphone.error}</HelperText>

              <CheckBox
                title="Clicando nesta caixa você concorda com os Termos de Uso e Política de Privacidade."
                center={false}
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
              />
              {isSelected &&
                <Button
                  title={"Prosseguir para pagamento"}
                  isLoading={loading}
                  onPress={onSignUpPressed}
                  colorbutton={THEME.COLORS.PRIMARY_900}
                  colortitle={THEME.COLORS.TEXT_000}
                ></Button>
              }

              {visibleAlert && (
                <AlertBox
                  title={title}
                  message={message}
                  visible={visibleAlert}
                  onClose={hideAlert}
                ></AlertBox>
              )}
            </Content>

            <Footer>
              <BackButton onPress={() => navigation.navigate("Login")}>
                <MaterialIcons
                  name="arrow-back"
                  size={24}
                  color={THEME.COLORS.PRIMARY_900}
                />
                <BackText>Eu já tenho uma conta</BackText>
              </BackButton>
            </Footer>
          </Container>
          <MobileOrDesktopComponent></MobileOrDesktopComponent>
        </ContainerSideView>
      </ViewPortProvider>
    </Provider>
  );
}
