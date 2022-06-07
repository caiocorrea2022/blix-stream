import React from "react";
import { Provider, Container, Title, Subtitle } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import Button from "../../components/Button";

export default function SucessoTest1({ navigation }) {
  return (
    <Provider>
      <Container>
        <Icon
          type="material-icons"
          name="check-circle-outline"
          color={THEME.COLORS.BACKGROUND}
          size={60}
        />
        <Title>Plano assinado com sucesso!</Title>
        <Subtitle>
          Por favor, verifique seu e-mail e faça o seu primeiro login.
        </Subtitle>
        <Button
          title={"Fazer Login"}
          onPress={() => navigation.navigate("Login")}
          colortitle ={THEME.COLORS.TEXT_900}
          colorbutton={THEME.COLORS.BACKGROUND}
        ></Button>
      </Container>
    </Provider>
  );
}
