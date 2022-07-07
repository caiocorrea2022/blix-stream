import 'react-native-gesture-handler'
import Navigation from './routes';
import { ThemeProvider } from 'styled-components/native';
import THEME from './config/theme';
import './constants/IMLocalize';
import { useFonts } from 'expo-font';
import { AuthContextProvider } from './context/AuthContextProvider';
import {montserrat_300Light, montserrat_400Regular, montserrat_500Medium, montserrat_700Bold, rajdhani_Medium } from './config/data'

export default function App() {

    const [fontsLoaded] = useFonts({
    //fonte textosApp
    Montserrat_300Light: require(`./assets/fonts/${montserrat_300Light}`),
    Montserrat_400Regular: require(`./assets/fonts/${montserrat_400Regular}`),
    Montserrat_500Medium: require(`./assets/fonts/${montserrat_500Medium}`),
    Montserrat_700Bold: require(`./assets/fonts/${montserrat_700Bold}`),
    //fonte titleAbout
    Rajdhani_Medium: require(`./assets/fonts/${rajdhani_Medium}`),
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
  )
}
