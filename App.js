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
  )
}
