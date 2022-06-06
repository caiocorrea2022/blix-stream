import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Plans from "../components/Price/Plans";
import DrawerNavigator from "./DrawerNavigator";
import Success from "../pages/SuccessPayment";
import ClickClass from "../pages/ClickClass";

// import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth"

export default function Navigation() {
  // const [user, setUser] = useState<FirebaseAuthTypes.User>(null);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(setUser);
  //   return subscriber;
  // }, []);

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Navigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClickClass"
        component={ClickClass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name = "Success"
      component = {Success}
      options = {{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
