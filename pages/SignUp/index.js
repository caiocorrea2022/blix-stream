import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Content,
  BackButton,
  BackText,
  Wrapper,
  Title,
} from "./style";
import THEME from '../../config/theme';
import { Provider } from "react-native-paper";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { emailValidator, passwordValidator, nameValidator } from "../../utils";
import {
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from '../../services/firebase';
import AlertBox from "../../components/AlertBox";
import { createCheckoutSess } from "../../services/stripe/createCheckoutSession";
import axios from 'axios';

export default function SignUp({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
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

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log("user criado");
        const user = userCredential.user;
        const usersCollectionRef = doc(firestore, "users", user.uid);
        const createUser = async () => {
          await setDoc(usersCollectionRef, {
            Nome_Completo: name.value,
            Email: email.value,
          });
          // alert("Conta", "Cadastrada com sucesso!")
          // console.log('user criado')
        };
        createUser().then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            showAlert(
              "Cadastro confirmado!",
              "Foi enviado um e-mail para:\n '+ email +' para verificação."
            );
            signOut(auth).then(() => {
              createCheckoutSess(user.uid);
            });
          });
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        switch (error.code) {
          case "auth/email-already-in-use":
            showAlert("Erro", "Este e-mail já está cadastrado");
            break;
          case "auth/weak-password":
            showAlert("Erro", "Senha deve conter pelo menos 6 caracteres");
            break;
          case "auth/invalid-email":
            showAlert("Erro", "E-mail inválido");
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

  return (
    <Provider>
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Content>
            <Wrapper>
              <Title>Cadastrar</Title>
              <TextInput
                label="Nome"
                placeholder="Digite seu nome completo"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: "" })}
                error={!!name.error}
                errorText={name.error}
              />

              <TextInput
                label="Email"
                placeholder="Digite seu email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: "" })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />

              <TextInput
                label="Senha"
                placeholder="Digite uma senha"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: "" })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
              />

              <Button
                title={"CADASTRAR"}
                isLoading={loading}
                onPress={onSignUpPressed}
              ></Button>

              {visibleAlert && (
                <AlertBox
                  title={title}
                  message={message}
                  visible={visibleAlert}
                  onClose={hideAlert}
                ></AlertBox>
              )}
            </Wrapper>
            <BackButton onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={24}
                color= {THEME.COLORS.PRIMARY_900}
              />
              <BackText>Eu já tenho uma conta</BackText>
            </BackButton>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </Provider>
  );
}
