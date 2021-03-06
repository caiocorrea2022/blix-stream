import React, { useState } from "react";
import HeaderPurchase from "../../components/HeaderPurchase";
import {
  Content,
  Footer,
  ViewTextInput,
  ViewButton,
  ViewCheckBox,
  ViewText,
  ViewHelper,
  ViewTitle,
  VerticalScroll,
} from "./style";
import THEME from "../../config/theme";
import { Provider } from "react-native-paper";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  cellphoneValidator,
  cpfValidator,
} from "../../utils";
import {
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from "../../services/firebase";
import { AlertBox } from "../../components/AlertBox";
import { HelperText } from "react-native-paper";
import { Title, SideView } from "../../config/theme/globalStyles";
import TouchableText from "../../components/TouchableText";
import { TextInputMask } from "react-native-masked-text";
import { SafeAreaView } from "react-native";

export function SignUp({ navigation, route }) {
  const { purchaseType, priceId } = route.params;
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const [cellphone, setCellPhone] = useState({ value: "", error: "" });
  const [cpf, setCpf] = useState({ value: "", error: "" });
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
    const cpfError = cpfValidator(cpf.value);

    if (
      emailError ||
      passwordError ||
      nameError ||
      cellphoneError ||
      cpfError
    ) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
      setCellPhone({ ...cellphone, error: cellphoneError });
      setCpf({ ...cpf, error: cpfError });
      setLoading(false);
      return;
    }
  };

  const getRawValue = (value) => {
    return value.replace(/\D/g, "").trim();
  };

  const onSignUpPressed = () => {
    validation();
    if (
      email.value &&
      password.value &&
      name.value &&
      cellphone.value &&
      cpf.value
    ) {
      if (password.value !== confirmPassword.value) {
        showAlert("Erro", "As senhas n??o correspondem.");
      } else if (isSelected === true) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((currentUser) => {
            console.log("cheguei");
            setLoading(false);
            navigation.navigate("CheckoutLoader", {
              name: name.value,
              email: email.value,
              phone: cellphone.value,
              cpf: getRawValue(cpf.value),
              userid: currentUser.user.uid,
              priceId: priceId,
              purchaseType: purchaseType,
            });
          })
          .catch((error) => {
            setLoading(false);
            console.error("erro:", error);
            switch (error.code) {
              case "auth/email-already-in-use":
                showAlert(
                  "Erro:",
                  "Este email j?? est?? cadastrado. Contate o suporte do aplicativo."
                );
                break;
              case "auth/weak-password":
                showAlert(
                  "Erro:",
                  "Senha deve conter pelo menos 6 caracteres."
                );
                break;
              case "auth/invalid-email":
                showAlert("Erro:", "Email inv??lido.");
                break;
              case "auth/operation-not-allowed":
                showAlert("Erro:", "Problemas ao cadastrar o usu??rio.");
                break;
            }
          });
      } else {
        showAlert(
          "Erro:",
          "Para prosseguir voc?? precisa estar de acordo com os Termos de Uso e a Pol??tica de Privacidade."
        );
      }
    }
  };

  return (
    <Provider>
      <SafeAreaView>
        <VerticalScroll>
          <HeaderPurchase signUp={true} />
          <ViewTitle>
            <Title
              fontSize={THEME.FONTSIZE.MEDIUM}
              textAlign="flex-start"
              padding="1rem 0rem 0rem 1rem"
            >
              Criar uma conta
            </Title>
          </ViewTitle>
          <Content>
            <ViewTextInput>
              <ViewText>
                <TextInput
                  label="Nome Completo"
                  placeholder="Digite seu nome completo"
                  returnKeyType="next"
                  value={name.value}
                  onChangeText={(text) => setName({ value: text, error: "" })}
                  error={!!name.error}
                />
              </ViewText>
              <ViewHelper>
                <HelperText type="error" visible={name.error}>
                  {name.error}
                </HelperText>
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
                <HelperText type="error" visible={email.error}>
                  {email.error}
                </HelperText>
              </ViewHelper>
            </ViewTextInput>
            <ViewTextInput>
              <ViewText>
                <TextInput
                  label="Celular"
                  placeholder="(DDD) 99999-9999"
                  returnKeyType="next"
                  value={cellphone.value}
                  onChangeText={(text) =>
                    setCellPhone({ value: text, error: "" })
                  }
                  error={!!cellphone.error}
                  keyboardType="phone-pad"
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      type={"cel-phone"}
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "(99) ",
                      }}
                    />
                  )}
                />
              </ViewText>
              <ViewHelper>
                <HelperText type="error" visible={cellphone.error}>
                  {cellphone.error}
                </HelperText>
              </ViewHelper>
            </ViewTextInput>
            <ViewTextInput>
              <ViewText>
                <TextInput
                  label="CPF"
                  placeholder="___.___.___.__"
                  returnKeyType="done"
                  value={cpf.value}
                  onChangeText={(text) => setCpf({ value: text, error: "" })}
                  error={!!cpf.error}
                  keyboardType="numeric"
                  render={(props) => <TextInputMask {...props} type={"cpf"} />}
                />
              </ViewText>
              <ViewHelper>
                <HelperText type="error" visible={cpf.error}>
                  {cpf.error}
                </HelperText>
              </ViewHelper>
            </ViewTextInput>
            <ViewTextInput>
              <ViewText>
                <TextInput
                  label="Senha"
                  placeholder="Digite uma senha"
                  returnKeyType="next"
                  value={password.value}
                  onChangeText={(text) =>
                    setPassword({ value: text, error: "" })
                  }
                  error={!!password.error}
                  secureTextEntry
                />
              </ViewText>
              <ViewHelper>
                <HelperText type="error" visible={password.error}>
                  {password.error}
                </HelperText>
              </ViewHelper>
            </ViewTextInput>
            <ViewTextInput>
              <ViewText>
                <TextInput
                  label="Confirmar Senha"
                  placeholder="Digite novamente a senha"
                  returnKeyType="next"
                  value={confirmPassword.value}
                  onChangeText={(text) =>
                    setConfirmPassword({ value: text, error: "" })
                  }
                  error={!!confirmPassword.error}
                  secureTextEntry
                />
              </ViewText>
              <ViewHelper>
                <HelperText type="error" visible={confirmPassword.error}>
                  {confirmPassword.error}
                </HelperText>
              </ViewHelper>
            </ViewTextInput>
          </Content>
          <ViewCheckBox>
            <CheckBox
              title="Clicando nesta caixa voc?? concorda com os Termos de Uso e Pol??tica de Privacidade."
              center={false}
              checked={isSelected}
              onPress={() => setSelected(!isSelected)}
            />
          </ViewCheckBox>
          <ViewButton>
            <Button
              title={"Ir para pagamento"}
              isLoading={loading}
              onPress={onSignUpPressed}
            ></Button>
          </ViewButton>
          <Footer>
            <TouchableText
              textDecoration="underline"
              onPress={() => navigation.navigate("Login")}
              title={"J?? possuo uma conta"}
              color={THEME.COLORS.PRIMARY_900}
            ></TouchableText>
          </Footer>
          {visibleAlert && (
            <AlertBox
              title={title}
              message={message}
              visible={visibleAlert}
              onClose={hideAlert}
            ></AlertBox>
          )}
        </VerticalScroll>
      </SafeAreaView>
    </Provider>
  );
}
