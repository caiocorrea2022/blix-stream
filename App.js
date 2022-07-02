import 'react-native-gesture-handler'
import Navigation from './routes';
import { ThemeProvider } from 'styled-components/native';
import THEME from './config/theme';
import './constants/IMLocalize';
import { useFonts } from 'expo-font';
import { AuthContextProvider } from './context/AuthContextProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light: require('./assets/fonts/Montserrat-Light.ttf'),
    Montserrat_400Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_500Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_700Bold: require('./assets/fonts/Montserrat-Bold.ttf'),
    Rajdhani_Medium: require('./assets/fonts/Rajdhani-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

// import React, {useEffect} from "react";

// import { ZoomMtg } from "@zoomus/websdk";
// import Constants from "expo-constants";
// import {View} from "react-native";
// import { Image } from './components/Zoom/style';
// import Button from "./components/Button";


// const zoomConfig = {
//   zoomSdkKey: Constants.manifest.extra.zoomSdkKey,
//   zoomSdkSecret: Constants.manifest.extra.zoomSdkSecret,
// };

// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.5.0/lib", "/av");

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load("pt-PT");
// ZoomMtg.i18n.reload("pt-PT");

// function App() {
//   const KJUR = require("jsrsasign");
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
//     // document.getElementById("zmmtg-root").style.display = "block";
//     const zoomMeetingSDK = document.getElementById('zmmtg-root')
//     zoomMeetingSDK.style.display = 'block';

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

//   useEffect(() => {
//      generateSignature(
//       zoomConfig.zoomSdkKey,
//       zoomConfig.zoomSdkSecret,
//       6517604350,
//       0
//     );
//   }, []);


//   return (
//     <div className="App">
//       <main>
//          <h1>Zoom Meeting SDK Sample React</h1>

//         <button
//           onClick={generateSignature(
//             zoomConfig.zoomSdkKey,
//             zoomConfig.zoomSdkSecret,
//             6517604350,
//             0
//           )}
//         >
//           Join Meeting
//         </button>
//       </main>
//     </div>
//   );
// }

// export default App;
