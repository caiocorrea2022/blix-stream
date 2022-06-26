import React, { useEffect } from "react";
import { Provider, Container, Title, Subtitle } from "./style";
import { Icon } from "react-native-elements";
import axios from 'axios';
import THEME from '../../config/theme';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../../services/firebase/index';
import Button from '../../components/Button';
import { StandardText, SmallText } from "../../config/theme/globalStyles";

export function Success({ navigation }) {

  const createTaxIdStripe = async (stripeId, cpf) => {
    const taxId = await fetch(`https://api.stripe.com/v1/customers/${stripeId}/tax_ids`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
      },
      body: {
        type: 'br_cpf',
        value: cpf,
      },
    })
   }


  const getUsers = async (user) => {
    const docRef = doc(firestore, "users", user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      
      return createTaxIdStripe(docSnap.data().stripeId, docSnap.data().CPF);
    } else {
      console.log("GetUser-Document data: No such document!");
    }
  }

  const getSessionId = async () => {
    //TODO remove token and add everything as URL parameters iterations, priceid and verify upsell
    //get param from URL
    const queryParams = new URLSearchParams(window.location.search);

    const uid = queryParams.get("uid");

    await getUsers(uid);
  }

  useEffect(() => {
    getSessionId();
  }, []);

  return (
    <Provider>
      <Container>
        <Icon
          type="material-icons"
          name="check-circle-outline"
          color={THEME.COLORS.BACKGROUND_ABOUT}
          size={60}
        />
        <StandardText color={THEME.COLORS.BACKGROUND_ABOUT} margin="1rem 0rem">Plano assinado com sucesso!</StandardText>
        <SmallText color={THEME.COLORS.BACKGROUND_ABOUT} margin="0rem 0rem 3rem 0rem">Por favor, verifique seu e-mail e faça o seu primeiro login.</SmallText>
        <Button
          title={"Fazer Login"}
          // onPress={() => { navigation.navigate("Login"), postGoogle() }}
          onPress={() => { navigation.navigate("Login")}}
          colorbutton={THEME.COLORS.BACKGROUND_ABOUT}
          colortitle={THEME.COLORS.TEXT_ABOUT}
        ></Button>
      </Container>
    </Provider>
  );
};

