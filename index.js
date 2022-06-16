import { registerRootComponent } from 'expo';
import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


// // guideline height for standard 5" device screen is 680
// export function RFValue(fontSize, standardScreenHeight = 680) {
//     const { height, width } = Dimensions.get("window");
//     const standardLength = width > height ? width : height;
//     const offset =
//       width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
  
//     const deviceHeight =
//       isIphoneX() || Platform.OS === "android"
//         ? standardLength - offset
//         : standardLength;
  
//     const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
//     return Math.round(heightPercent);
//   }