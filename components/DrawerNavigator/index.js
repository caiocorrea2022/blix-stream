import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Plans from "../../pages/Plans";
import EditProfile from "../../pages/EditProfile";
import THEME from "../../config/theme";
import DrawerContent from "../DrawerContent";

const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {
  // const [firstName, setFirstName] = useState("Aulas");
  // const [secondName, setSecondName] = useState("Tela Inicial");

  // const FirstComponent = (usuario) => {
  //   return usuario ? <Main></Main> : <About></About>;
  // };

  // const SecondComponent = (userId) => {
  //   return userId ? <About></About>: <Main></Main>;
  // };

  // useEffect(() => {

  //   onAuthStateChanged(auth, (user) => {
  //     console.log('user',user)
  //     if (user) {
  //      console.log(user.uid);
  //      setUser(user.uid);
  //      setFirstName("Aulas");
  //     } else {
  //       setFirstName("Tela Inicial");
  //     }
  //   });

  // }, []);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: THEME.COLORS.BACKGROUND,
        },
      }}
    >
      <Drawer.Screen
        name={"Tela Inicial"}
        component={About}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
          drawerActiveTintColor: THEME.COLORS.TEXT_900,
          drawerInactiveTintColor: THEME.COLORS.TEXT_900,
          drawerLabelStyle: {
            fontSize: THEME.FONTSIZE.SMALL,
            fontFamily: THEME.FONTFAMILY.REGULAR,
          },
        }}
      />
      <Drawer.Screen
        name={"Aulas"}
        component={Main}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
          drawerActiveTintColor: THEME.COLORS.TEXT_900,
          drawerInactiveTintColor: THEME.COLORS.TEXT_900,
          drawerLabelStyle: {
            fontSize: THEME.FONTSIZE.SMALL,
            fontFamily: THEME.FONTFAMILY.REGULAR,
          },
        }}
      />
      <Drawer.Screen
        name="Editar Perfil"
        component={EditProfile}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
          drawerActiveTintColor: THEME.COLORS.TEXT_900,
          drawerInactiveTintColor: THEME.COLORS.TEXT_900,
          drawerLabelStyle: {
            fontSize: THEME.FONTSIZE.SMALL,
            fontFamily: THEME.FONTFAMILY.REGULAR,
          },
        }}
      />
      <Drawer.Screen
        name="Planos e Preços"
        component={Plans}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
          drawerActiveTintColor: THEME.COLORS.TEXT_900,
          drawerInactiveTintColor: THEME.COLORS.TEXT_900,
          drawerLabelStyle: {
            fontSize: THEME.FONTSIZE.SMALL,
            fontFamily: THEME.FONTFAMILY.REGULAR,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
