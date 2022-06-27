import React, { useEffect } from "react";
import { Icon } from "react-native-elements";
import axios from 'axios';
import THEME from '../../config/theme';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../../services/firebase/index';
import Button from '../../components/Button';
import { StandardText, SmallText, Container } from "../../config/theme/globalStyles";
import { useAuth } from "../../context/useAuth";
import { ActivityIndicator } from 'react-native';

export function Success({ navigation }) {
  const { user, loading } = useAuth();
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
    loading ? <ActivityIndicator color="transparent" /> :
    <Container justifyContent="center">
      <Icon
        type="material-icons"
        name="check-circle-outline"
        color={THEME.COLORS.PRIMARY_900}
        size={60}
      />
      {user ?
        <>
          <StandardText color={THEME.COLORS.PRIMARY_900} margin="1rem 0rem">Compra realizada com sucesso!</StandardText>
          <SmallText color={THEME.COLORS.PRIMARY_900} margin="0rem 0rem 3rem 0rem">Clique no botão abaixo para acessar os conteúdos!</SmallText>
          <Button
            title={"Acesse os conteúdos"}
            onPress={() => navigation.navigate('Drawer', { screen: 'Aulas' })}>
          </Button>
        </>
        :
        <>
          <StandardText color={THEME.COLORS.PRIMARY_900} margin="1rem 0rem">Compra realizada com sucesso!</StandardText>
          <SmallText color={THEME.COLORS.PRIMARY_900} margin="0rem 0rem 3rem 0rem">Por favor, verifique seu e-mail e faça o seu primeiro login.</SmallText>
          <Button
            title={"Fazer Login"}
            // onPress={() => { navigation.navigate("Login"), postGoogle() }}
            onPress={() => navigation.navigate("Login")}>
          </Button>
        </>
      }
    </Container>
  );
};

