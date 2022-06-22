import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Plans from "../pages/Plans"
import DrawerNavigatorScreen from "../components/DrawerNavigator";
import Success from "../pages/SuccessPayment";
import ClickClass from "../pages/ClickClass";
import ClickCourse from "../pages/ClickCourse";
import AuthProvider from '../hooks/auth';
import TermsofUse from '../pages/TermsofUse';
import Main from '../pages/Main';
import About from '../pages/About';
import PDFView from '../pages/PDFView';


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
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    
    >
      <Stack.Screen
        name="DrawerNavigatorScreen"
        component={DrawerNavigatorScreen}
      />
      <Stack.Screen
        name="Main"
        component={Main}
      />
      <Stack.Screen
        name="About"
        component={About}
      />
      <Stack.Screen
        name="Plans"
        component={Plans}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="ClickClass"
        component={ClickClass}
      />
      <Stack.Screen
        name="ClickCourse"
        component={ClickCourse}
      />
      <Stack.Screen
        name="TermsofUse"
        component={TermsofUse}
      />
            <Stack.Screen
        name="PDFView"
        component={PDFView}
      />
      <Stack.Screen
        name="Success"
        component={Success}
      />
    </Stack.Navigator>
  );
}
