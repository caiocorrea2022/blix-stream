import Navigation from './navigation/Navigation';
import {ThemeProvider} from 'styled-components/native';
import theme from './global/theme';
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
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
  );
}