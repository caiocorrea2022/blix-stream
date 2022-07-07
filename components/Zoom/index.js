import React, { useEffect } from "react";
import Constants from "expo-constants";
import Button from "../Button";
import { Image } from "./style";
import { View } from "react-native";
import {returnDomainZoom} from "../../config/data"

export function Zoom ({ img, meetingNumber, passWord, className, userName, cardId }) {
  const zoomConfig = {
    zoomSdkKey: Constants.manifest.extra.zoomSdkKey,
    zoomSdkSecret: Constants.manifest.extra.zoomSdkSecret,
  };

  const KJUR = require("jsrsasign");
  var sdkKey = zoomConfig.zoomSdkKey;
  var leaveUrl = `${returnDomainZoom}/ClickClass?cardId=${cardId}`;
  var userEmail = "";
  var registrantToken = "";
  var role = 0;

  useEffect(() => {
    const { ZoomMtg} = require("@zoomus/websdk");
    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.5.0/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    ZoomMtg.i18n.load("pt-PT");
    ZoomMtg.i18n.reload("pt-PT");
    document.getElementById("zmmtg-root").style.display = "none";
  });

  function joinmeeting() {
    generateSignature(
      zoomConfig.zoomSdkKey,
      zoomConfig.zoomSdkSecret,
      meetingNumber,
      role
    );
  }

  function generateSignature(sdkKey, sdkSecret, meetingNumber, role) {
    const iat = Math.round((new Date().getTime() - 30000) / 1000);
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };

    const oPayload = {
      sdkKey: sdkKey,
      mn: meetingNumber,
      role: role,
      iat: iat,
      exp: exp,
      appKey: sdkKey,
      tokenExp: iat + 60 * 60 * 2,
    };

    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
    return sdkJWT, startMeeting(sdkJWT);
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          sdkKey: sdkKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            // document
            //   .getElementById("zmmtg-root")
            //   .style.setProperty("display", "block", "important");
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <Image source={img} resizeMode="cover">
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          title={`Acessar ${className} ao Vivo`}
          onPress={() => {
            joinmeeting();
          }}
        ></Button>
      </View>
    </Image>
  );
};
