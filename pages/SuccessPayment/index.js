import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  userEmail,
  Linking,
} from "react-native";
import { Icon } from "react-native-elements";
import { firestore } from "../../services/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const auth = getAuth();

export default function Success({ navigation }) {

  const getSessionId = async () => {

    //TODO remove token and add everything as URL parameters iterations, priceid and verify upsell

    //get param from URL
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");

    //first call to get subId
    const session = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer sk_test_51K1wAiCmcyIwF9rcDllUmRHt47Sf8pzFwglHfcrHN6Zy8GdSnl3RFPl8yoPoOJbFXs18LK8eCHavE9oQilLFqzbk00dR3pma24'
      }
    }).then((r) => r.json());
    
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

    schedFormBody.push(encodeURIComponent('end_behavior') + '=' +  encodeURIComponent('cancel'));
    schedFormBody.push(encodeURIComponent('phases[0]start_date') + '=' +  encodeURIComponent(startDate));
    schedFormBody.push(encodeURIComponent('phases[0][items][0][price]') + '=' +  encodeURIComponent('price_1L5qw3CmcyIwF9rcW6VuPvSg'));
    schedFormBody.push(encodeURIComponent('phases[0][iterations]') + '=' +  encodeURIComponent());6
    schedFormBody.push(encodeURIComponent('phases[0][items][0][quantity]') + '=' +  encodeURIComponent(1));
  
  
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

  useEffect(() => {

    getSessionId();
  }, []);

  return (
    <View>{/* <Text>{sessionJSON}</Text> */}</View>
  );
}
