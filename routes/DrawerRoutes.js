import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import THEME from "../config/theme";
import { Main } from "../pages/Main";
import { TermsofUse } from "../pages/TermsofUse";
import { EditProfile } from "../pages/EditProfile";
import { DrawerContent } from "../components/DrawerContent";
import { useAuth } from "../context/useAuth";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  const { user } = useAuth();

  return (
    <Navigator
      useLegacyImplementation
      id="Drawer"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: "fade",
        drawerActiveBackgroundColor: THEME.COLORS.SECONDARY_900,
        drawerActiveTintColor: THEME.COLORS.BACKGROUND_ABOUT,
        drawerInactiveTintColor: THEME.COLORS.SECONDARY_900,
        drawerStyle: {
          backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
        },
        drawerLabelStyle: {
          fontSize: THEME.FONTSIZE.SMALL,
          fontFamily: THEME.FONTFAMILY.REGULAR,
        },
      }}
    >
      <Screen name="Aplicativo" component={Main} />
      {user ? <Screen name="Meu Perfil" component={EditProfile} /> : <></>}
      <Screen name="Termos de Uso" component={TermsofUse} />
    </Navigator>
  );
}
