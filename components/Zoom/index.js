// import React, { useState } from "react";

// import { ZoomMtg } from "@zoomus/websdk";
// import Constants from "expo-constants";
// import { View } from "react-native";

// const zoomConfig = {
//   zoomSdkKey: Constants.manifest.extra.zoomSdkKey,
//   zoomSdkSecret: Constants.manifest.extra.zoomSdkSecret,
// };

// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.5.0/lib", "/av");

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load("en-US");
// ZoomMtg.i18n.reload("en-US");

// function Zoom() {
//   const KJUR = require("jsrsasign");
//   const [buttonVisible, setButtonVisible] = useState(true);
//   var sdkKey = zoomConfig.zoomSdkKey;
//   var meetingNumber = "6517604350";
//   var leaveUrl = "http://localhost:19006";
//   var userName = "React";
//   var userEmail = "";
//   var passWord = "YXkxYlAwQ0ROdXhUZGdVZDF6cFo0dz09";
//   var registrantToken = "";

//   function generateSignature(sdkKey, sdkSecret, meetingNumber, role) {
//     const iat = Math.round((new Date().getTime() - 30000) / 1000);
//     const exp = iat + 60 * 60 * 2;
//     const oHeader = { alg: "HS256", typ: "JWT" };

//     const oPayload = {
//       sdkKey: sdkKey,
//       mn: meetingNumber,
//       role: role,
//       iat: iat,
//       exp: exp,
//       appKey: sdkKey,
//       tokenExp: iat + 60 * 60 * 2,
//     };

//     const sHeader = JSON.stringify(oHeader);
//     const sPayload = JSON.stringify(oPayload);
//     const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
//     return sdkJWT, startMeeting(sdkJWT);
//   }

//   function startMeeting(signature) {
//     document.getElementById("zmmtg-root").style.display = "block";

//     ZoomMtg.init({
//       leaveUrl: leaveUrl,
//       success: (success) => {
//         console.log(success);

//         ZoomMtg.join({
//           signature: signature,
//           meetingNumber: meetingNumber,
//           userName: userName,
//           sdkKey: sdkKey,
//           userEmail: userEmail,
//           passWord: passWord,
//           tk: registrantToken,
//           success: (success) => {
//             console.log(success);
//           },
//           error: (error) => {
//             console.log(error);
//           },
//         });
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });
//   }

//   return (
//     <div className="App">
//     <main>
//       <h1>Zoom Meeting SDK Sample React</h1>

//       <button
//         onClick={generateSignature(
//           zoomConfig.zoomSdkKey,
//           zoomConfig.zoomSdkSecret,
//           6517604350,
//           0
//         )}
//       >
//         Join Meeting
//       </button>
//     </main>
//   </div>
//   );
// }

// export default Zoom;

import React, { useEffect } from "react";
// import { ZoomMtg } from "@zoomus/websdk";
import Constants from "expo-constants";
import Button from "../Button";
import { Image } from "./style";
import { View } from "react-native";
import "@zoomus/websdk/dist/css/react-select.css";
import "@zoomus/websdk/dist/css/bootstrap.css";

const Zoom = ({ img, meetingNumber, passWord, className, userName }) => {
  const zoomConfig = {
    zoomSdkKey: Constants.manifest.extra.zoomSdkKey,
    zoomSdkSecret: Constants.manifest.extra.zoomSdkSecret,
  };

  const KJUR = require("jsrsasign");
  var sdkKey = zoomConfig.zoomSdkKey;
  var leaveUrl = "http://localhost:19006";
  // var userName = "React";
  var userEmail = "";
  var registrantToken = "";
  var role = 0;

  useEffect(() => {
    const { ZoomMtg } = require("@zoomus/websdk");
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
            document
              .getElementById("zmmtg-root")
              .style.setProperty("display", "block", "important");
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

export default Zoom;
