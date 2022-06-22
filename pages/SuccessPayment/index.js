import React, { useEffect } from "react";
import { Provider, Container, Title, Subtitle } from "./style";
import { Icon } from "react-native-elements";
import axios from 'axios';
import THEME from '../../config/theme';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../../services/firebase/index';
import Button from '../../components/Button';
import { StandardText, SmallText } from "../../config/theme/globalStyles";


export default function Success({ navigation }) {  

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
      const userProfile = {
        Nome: docSnap.data().Nome_Completo,
        Email: docSnap.data().Email,
      };
      // return axios.post('https://sheet.best/api/sheets/ea18f0f1-e07a-438b-8ec5-ac2c44b1c9ab', userProfile);
      return createTaxIdStripe(docSnap.data().stripeId, docSnap.data().CPF);
    } else {
      console.log("GetUser-Document data: No such document!");
    }
  }

  const getSessionId = async () => {
    //TODO remove token and add everything as URL parameters iterations, priceid and verify upsell
    //get param from URL
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");
    const priceId = queryParams.get("price_id");
    const uid = queryParams.get("uid");
    const mode = queryParams.get("mode");
    const iterationsCount = queryParams.get("iterations")

    if (iterationsCount && iterationsCount > 0) {
      //first call to get subId
      const session = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
        }
      }).then((r) => r.json());
      console.log(session);

      //subId retrieved from checkout session
      const subId = session.subscription;

      // create form body to add new schedule
      const body = {
        from_subscription: `${subId}`
      }

      var formBody = [];
      for (var key in body) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(body[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');

      //call to create schedule from subscription
      const schedule = await fetch(`https://api.stripe.com/v1/subscription_schedules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
        },
        body: formBody
      })
        .then((r) => r.json());

      //get schedule id and start date
      const scheduleId = schedule.id;
      const startDate = schedule.current_phase.start_date;

      //create phases body
      var schedFormBody = [];

      schedFormBody.push(encodeURIComponent('end_behavior') + '=' + encodeURIComponent('cancel'));
      schedFormBody.push(encodeURIComponent('phases[0]start_date') + '=' + encodeURIComponent(startDate));
      schedFormBody.push(encodeURIComponent('phases[0][items][0][price]') + '=' + encodeURIComponent(priceId));
      schedFormBody.push(encodeURIComponent('phases[0][iterations]') + '=' + encodeURIComponent(iterationsCount));
      schedFormBody.push(encodeURIComponent('phases[0][items][0][quantity]') + '=' + encodeURIComponent(1));
      schedFormBody = schedFormBody.join('&');

      //third call to create schedule phases
      const iterations = await fetch(`https://api.stripe.com/v1/subscription_schedules/${scheduleId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
        },
        body: schedFormBody
      })
        .then((r) => r.json());

    }
    console.log('aqui eu cheguei')
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
          color={THEME.COLORS.BACKGROUND}
          size={60}
        />
        <StandardText color={THEME.COLORS.BACKGROUND} margin="1rem 0rem">Plano assinado com sucesso!</StandardText>
        <SmallText color={THEME.COLORS.BACKGROUND} margin="0rem 0rem 3rem 0rem">Por favor, verifique seu e-mail e faça o seu primeiro login.</SmallText>
        <Button
          title={"Fazer Login"}
          // onPress={() => { navigation.navigate("Login"), postGoogle() }}
          onPress={() => { navigation.navigate("Login")}}
          borderRadius="30px"
          colorbutton={THEME.COLORS.BACKGROUND}
          colortitle={THEME.COLORS.TEXT_ABOUT}
        ></Button>
      </Container>
    </Provider>
  );
};

