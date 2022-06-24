import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import THEME from '../config/theme'
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { About } from "../pages/About";
import { Main } from "../pages/Main";
import { EditProfile } from "../pages/EditProfile";
import { DrawerContent } from "../components/DrawerContent";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
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
        <Navigator
            useLegacyImplementation
            id="Drawer"
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStatusBarAnimation: 'fade',
                drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_800,
                drawerActiveTintColor: THEME.COLORS.TEXT_ABOUT,
                drawerInactiveTintColor: THEME.COLORS.TEXT_ABOUT,
                drawerStyle: {
                    backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
                },
                drawerLabelStyle: {
                    fontSize: THEME.FONTSIZE.SMALL,
                    fontFamily: THEME.FONTFAMILY.REGULAR,
                },
            }}
        >
            <Screen
                name='Aulas'
                component={Main}
            />
            <Screen
                name='Home'
                component={About}
            />
            {login ?
                <Screen
                    name='Perfil'
                    component={EditProfile}
                />
                :
                <></>
            }
        </Navigator>
    )
}
