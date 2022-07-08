import 'react-native-gesture-handler'
import Navigation from './routes';
import { ThemeProvider } from 'styled-components/native';
import THEME from './config/theme';
import './constants/IMLocalize';
import { useFonts } from 'expo-font';
import { AuthContextProvider } from './context/AuthContextProvider';
import {text_Light, text_Regular, text_Medium, text_Bold, title_About } from './config/data'

export default function App() {

    const [fontsLoaded] = useFonts({
    //fonte textosApp
    text_Light: require(`./assets/fonts/${text_Light}`),
    text_Regular: require(`./assets/fonts/${text_Regular}`),
    text_Medium: require(`./assets/fonts/${text_Medium}`),
    text_Bold: require(`./assets/fonts/${text_Bold}`),
    //fonte titleAbout
    title_About: require(`./assets/fonts/${title_About}`),
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
