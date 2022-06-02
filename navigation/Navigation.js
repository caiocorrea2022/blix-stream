import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Success from "../pages/SuccessPayment";
import Home from "../pages/Home"
import Playlist from "../pages/Playlist";

// import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth"

export default function Navigation() {

  // const [user, setUser] = useState<FirebaseAuthTypes.User>(null);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(setUser);
  //   return subscriber;
  // }, []);

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Navigator/>
      {/* {user ? <Home /> : <Navigator />} */}
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
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
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
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
