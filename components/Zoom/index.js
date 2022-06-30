import React, { useEffect, useState } from "react";
import Button from "../Button";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import { Image } from './style';
import {View} from "react-native";
import { Dimensions } from 'react-native';

function Zoom({img}) {
  const KJUR = require("jsrsasign");
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const client = ZoomMtgEmbedded.createClient();
  const [signature, setSignature] = useState("");
  const [buttonVisible, setButtonVisible] = useState(true);
  var sdkKey = "zb5bNqHIJ3SObt0AxMFCmyjNSI2zBwl7lQRY";
  var meetingNumber = "6517604350";
  var userName = "React";
  var userEmail = "";
  var passWord = "YXkxYlAwQ0ROdXhUZGdVZDF6cFo0dz09";
  var registrantToken = "";

  useEffect(() => {
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
      return sdkJWT, setSignature(sdkJWT);
    }
    generateSignature(
      "zb5bNqHIJ3SObt0AxMFCmyjNSI2zBwl7lQRY",
      "aiw4cjV4Q4khq264SVZFylT3GCJiIZWyWitv",
      6517604350,
      0
    );
  }, []);

  function startMeeting() {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: "en-US",
      customize: {
        meetingInfo: [
          "topic",
          "host",
          "mn",
          "pwd",
          "telPwd",
          "invite",
          "participant",
          "dc",
          "enctype",
        ],
        toolbar: {
          buttons: [
            {
              text: "Custom Button",
              className: "CustomButton",
              onClick: () => {
                console.log("custom button");
              },
            },
          ],
        },
        video: {
            popper: {
            disableDraggable: true
            },
            isResizable: false,
            viewSizes: {
              default: {
                width: windowWidth,
                height: windowHeight
              },
              ribbon: {
                width: 300,
                height: 700
              }
            }
          }
      },
    });

    client.join({
      sdkKey: sdkKey,
      signature: signature,
      meetingNumber: meetingNumber,
      password: passWord,
      userName: userName,
      userEmail: userEmail,
      tk: registrantToken,
    });
  }

  return (
    <>
    <Image source={img} resizeMode="cover">
    <View style={{ backgroundColor: "rgba(0,0,0,0.7)", width: '100%', height:'100%', justifyContent: "center" }}>
       {buttonVisible ? (
        <Button
          title={"Acessar Aula ao Vivo"}
          onPress={() => {
            startMeeting(), setButtonVisible(false);
          }}
        ></Button>
      ) : (
        <></>
      )}
      <div id="meetingSDKElement"></div>
     </View>
      </Image>
      {/* <div id="meetingSDKElement"></div> */}
    </>
    /* <div id="meetingSDKElement"></div> */
    // <div className="App">
    //   <main>
    //     <h1>Zoom Meeting SDK Sample React</h1>

    //     {/* For Component View */}
    //     <div id="meetingSDKElement">
    //       {/* Zoom Meeting SDK Component View Rendered Here */}
    //     </div>
    //     <Button
    //           title={"Join Meeting"}
    //           onPress={() => startMeeting()}
    //     ></Button>

    //     {/* <button onClick={console.log('oi')}>Join Meeting</button> */}
    //   </main>
    // </div>
  );
}

export default Zoom;
