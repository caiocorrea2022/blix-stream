import React from "react";
// import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import  CookieConsent ,  {  Cookies  }  from  "react-cookie-consent" ;
import {View} from 'react-native';
import THEME from "../../config/theme";

export default function CookieConsentFunction() {
    return (
    <View>
       
        <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        declineButtonText="Política de cookies"
        style={{ 
            background: 'red',
            justifyContent: "center", 
        }} 

        buttonStyle= {{
            background: 'black',
            color: THEME.COLORS.TEXT_ABOUT,
            borderRadius: 10,
            padding: 10,
        }}
        declineButtonStyle={{
            color:  THEME.COLORS.TEXT_ABOUT,
            background: THEME.COLORS.BACKGROUND_MAIN,
            textDecorationLine:'underline'
          }}
        contentStyle={{
            color:THEME.COLORS.BACKGROUND_ABOUT,
            textAlign:'justify',
            fontFamily: THEME.FONTFAMILY.LIGHT,
            fontSize: 14,
            margin: 12,
        }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
            } else {
            alert("Accept was triggered by clicking the Accept button");
            }
            console.log(getCookieConsentValue());
            }}
            enableDeclineButton
            onDecline={() => {
            //   alert("nay!");
              console.log(getCookieConsentValue());
            }}
        >
        Usamos cookies para armazenar informações sobre como você usa o nosso site e as páginas que visita. Tudo para tornar a sua experiência a mais agradável possível. Ao clicar em "Aceitar", você consente com a utilização de todos os cookies. {" "}
        <span style={{ fontSize: 14}}>Saiba que a qualquer momento você poderá limpar os dados/cache do seu navegador e desabilitar cookies de terceiros.</span>
        </CookieConsent>
    </View>
    );
  }