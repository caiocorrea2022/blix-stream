import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Plans from "../pages/Plans"
import MyDrawer from "../components/DrawerNavigator";
import Success from "../pages/SuccessPayment";
import ClickClass from "../pages/ClickClass";
import ClickCourse from "../pages/ClickCourse";
import AuthProvider from '../hooks/auth';
import TermsofUse from '../pages/TermsofUse';
import Main from '../pages/Main';
import About from '../pages/About';


export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={About}
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
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClickClass"
        component={ClickClass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClickCourse"
        component={ClickCourse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsofUse"
        component={TermsofUse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
