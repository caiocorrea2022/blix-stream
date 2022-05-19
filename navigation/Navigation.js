import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../pages/Home"

export default function Navigation() {
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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="Cadastro"
        component={SignUp}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}
