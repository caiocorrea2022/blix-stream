import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Success } from "../pages/SuccessPayment";
import { ClickClass } from "../pages/ClickClass";
import { ClickCourse } from "../pages/ClickCourse";
import { PDFView } from "../pages/PDFView";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Plans } from "../pages/Plans";
import { TermsofUse } from "../pages/TermsofUse";
import { DrawerRoutes } from "./DrawerRoutes";
import { About } from "../pages/About";
import { EditProfile } from "../pages/EditProfile";
import { PreLoadStripe } from "../context/loadStripe";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="About"
      screenOptions={{ headerShown: false }}>
      <Screen name="Drawer" component={DrawerRoutes} />
      <Screen name="About" component={About} />
      <Screen name="Plans" component={Plans} />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ClickClass" component={ClickClass} />
      <Screen name="ClickCourse" component={ClickCourse} />
      <Screen name="TermsofUse" component={TermsofUse} />
      <Screen name="PDFView" component={PDFView} />
      <Screen name="Success" component={Success} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="PreLoadStripe" component={PreLoadStripe} />
    </Navigator>
  );
}
