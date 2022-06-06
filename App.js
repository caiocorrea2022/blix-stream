import Navigation from './routes';
import {ThemeProvider} from 'styled-components/native';
import THEME from './config/theme';
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


  return (
  <ThemeProvider theme={THEME}>
    <Navigation />
  </ThemeProvider>
  );
}