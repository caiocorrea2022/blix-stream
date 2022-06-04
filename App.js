import Navigation from './navigation/Navigation';
import {ThemeProvider} from 'styled-components/native';
import THEME from './config/theme';
import AppLoading from 'expo-app-loading';
import './constants/IMLocalize';
import {
	useFonts,
	Montserrat_200ExtraLight,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
	Montserrat_800ExtraBold
} from "@expo-google-fonts/montserrat";

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <ThemeProvider theme={THEME}>
    <Navigation />
  </ThemeProvider>
  );
}