import Navigation from './routes';
import {ThemeProvider} from 'styled-components/native';
import THEME from './config/theme';
import './constants/IMLocalize';
// import {
// 	useFonts,
// 	Montserrat_200ExtraLight,
// 	Montserrat_300Light,
// 	Montserrat_400Regular,
// 	Montserrat_500Medium,
// 	Montserrat_700Bold,
// 	Montserrat_800ExtraBold
// } from "@expo-google-fonts/montserrat";
import { useFonts } from 'expo-font';
import {View, Text} from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight: require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    Montserrat_300Light: require('./assets/fonts/Montserrat-Light.ttf'),
    Montserrat_400Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_500Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_700Bold: require('./assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_800ExtraBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    Rajdhani_Medium: require('./assets/fonts/Rajdhani-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  <ThemeProvider theme={THEME}>
    <Navigation />
  </ThemeProvider>
  );
}