import React, { useEffect } from "react";
import {
  Provider,
  Container,
  Title,
  Subtitle,
} from "./style";
import { Icon } from "react-native-elements";
import { getAuth } from "firebase/auth";
import axios from 'axios';
import THEME from '../../config/theme';
// import Button from '../../components/Button';

const auth = getAuth();

export default function Success({ navigation }) {

  const googleInfo = {
    Nome: 'Taís Teste',
    Email: 'taiskro@hotmail.com',
  };

  const getSessionId = async () => {

    //TODO remove token and add everything as URL parameters iterations, priceid and verify upsell

    //get param from URL
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");
    const priceId = queryParams.get("price_id");
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

  }

  useEffect(() => {

    getSessionId();
    axios.post('https://sheet.best/api/sheets/fa8b5f7a-031b-43be-b1c2-56d16d985edb', googleInfo)
      .then(response => {
        console.log(response);
      })
  }, []);

  return (
<Provider>
    <Container>
      <Icon
        type ="material-icons"
        name = "check-circle-outline"
        color= {THEME.COLORS.BACKGROUND}
        size ={60}
      />
      <Title>Plano assinado com sucesso!</Title>
      <Subtitle>Por favor, verifique seu e-mail e faça o seu primeiro login.</Subtitle>
      {/* <Button
          title={"Fazer Login"}
          onPress={() => navigation.navigate("Login")}
          colortitle ={THEME.COLORS.TEXT_900}
          colorbutton={THEME.COLORS.BACKGROUND}
        ></Button> */}
    </Container>
  </Provider>  
  );
};

