import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../../pages/Main'
import About from '../../pages/About'
import EditProfile from '../../pages/EditProfile';
import THEME from '../../config/theme';
import DrawerContent from '../DrawerContent';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent  = {props =><DrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: THEME.COLORS.BACKGROUND,
                    },
                }}
            >
                <Drawer.Screen
                    name="Tela Principal"
                    component={Main}
                    options={{
                        headerShown: false,
                        drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
                        drawerActiveTintColor: THEME.COLORS.TEXT_900,
                        drawerInactiveTintColor: THEME.COLORS.TEXT_900,
                        drawerLabelStyle: {fontSize: THEME.FONTSIZE.MEDIUM, fontFamily: THEME.FONTFAMILY.REGULAR }
                    }} />
                <Drawer.Screen
                    name="Sobre nós"
                    component={About}
                    options={{
                        headerShown: false,
                        drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
                        drawerActiveTintColor: THEME.COLORS.TEXT_900,
                        drawerInactiveTintColor: THEME.COLORS.TEXT_900,
                        drawerLabelStyle: {fontSize: THEME.FONTSIZE.MEDIUM, fontFamily: THEME.FONTFAMILY.REGULAR }
                    }} />
                <Drawer.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerShown: false,
                        drawerActiveBackgroundColor: THEME.COLORS.PRIMARY_700,
                        drawerActiveTintColor: THEME.COLORS.TEXT_900,
                        drawerInactiveTintColor: THEME.COLORS.TEXT_900,
                        drawerLabelStyle: {fontSize: THEME.FONTSIZE.MEDIUM, fontFamily: THEME.FONTFAMILY.REGULAR }
                    }} />
            </Drawer.Navigator>
    );
}