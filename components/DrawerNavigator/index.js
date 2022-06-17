import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../../pages/Main";
import About from "../../pages/About";
import EditProfile from "../../pages/EditProfile";
import THEME from "../../config/theme";
import DrawerContent from "./DrawerContent";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from "firebase/auth";

const DrawerNavigator = createDrawerNavigator();

export default function DrawerNavigatorScreen({ navigation }) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user)
      if (user) {
        console.log(user.uid);
        setLogin(true);
      }
    });
  }, []);

  return (
    <DrawerNavigator.Navigator
      useLegacyImplementation
      id="DrawerNavigator"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerStyle: {
          backgroundColor: THEME.COLORS.BACKGROUND,
        },
      }}
    >
      <DrawerNavigator.Screen
        name={"Tela Inicial"}
        component={About}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
          drawerActiveTintColor: THEME.COLORS.SMALL_TEXT,
          drawerInactiveTintColor: THEME.COLORS.SMALL_TEXT,
          drawerLabelStyle: {
            fontSize: THEME.FONTSIZE.SMALL,
            fontFamily: THEME.FONTFAMILY.REGULAR,
          },
        }}
      />
      <DrawerNavigator.Screen
        name={"Aulas"}
        component={Main}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
          drawerActiveTintColor: THEME.COLORS.SMALL_TEXT,
          drawerInactiveTintColor: THEME.COLORS.SMALL_TEXT,
          drawerLabelStyle: {
            fontSize: THEME.FONTSIZE.SMALL,
            fontFamily: THEME.FONTFAMILY.REGULAR,
          },
        }}
      />
      {login ?
        <DrawerNavigator.Screen
          name="Editar Perfil"
          component={EditProfile}
          options={{
            headerShown: false,
            drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
            drawerActiveTintColor: THEME.COLORS.SMALL_TEXT,
            drawerInactiveTintColor: THEME.COLORS.SMALL_TEXT,
            drawerLabelStyle: {
              fontSize: THEME.FONTSIZE.SMALL,
              fontFamily: THEME.FONTFAMILY.REGULAR,
            },
          }}
        />
        :
        <></>
      }
    </DrawerNavigator.Navigator>
  );
}