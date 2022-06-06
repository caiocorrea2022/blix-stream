import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import DrawerContent from '../../components/DrawerContent';
// import About from '../../pages/About';
// import EditProfile from '../../pages/EditProfile'
import Main from '../../pages/Main'
import THEME from '../../config/theme';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){          
    return(
        <Drawer.Navigator drawerContent  = {props =><DrawerContent {...props} />}>
            <Drawer.Screen 
                name = "Main"
                component ={Main}
                options = {{
                    headerShown:false,
                    drawerActiveBackgroundColor: THEME.COLORS.BACKGROUND,
                    drawerActiveTintColor: THEME.COLORS.TEXT_800,
                    drawerIcon: ({focused,size}) =>(
                        <Icon 
                            type = "material"
                            name = "home"
                            color = {focused ? THEME.COLORS.PRIMARY_800 : THEME.COLORS.TEXT_700}
                            size = {size}
                        />
                    )
                }}
            />
            {/* <Drawer.Screen 
            name = "About"
            component ={About}
            options = {{
                 headerShown:false,
                 drawerActiveBackgroundColor: THEME.COLORS.BACKGROUND,
                 drawerActiveTintColor: THEME.COLORS.TEXT_800,
                 drawerIcon: ({focused,size}) =>(
                     <Icon 
                         type = "material-community"
                         name = "credit-card-outline"
                         color = {focused ? THEME.COLORS.PRIMARY_800 : THEME.COLORS.TEXT_700}
                         size = {size}
                     />
                 )
            }}
            />
            <Drawer.Screen 
                name = "EditProfile"
                component ={EditProfile}
                options = {{
                    headerShown:false,
                    drawerActiveBackgroundColor: THEME.COLORS.BACKGROUND,
                    drawerActiveTintColor: THEME.COLORS.TEXT_800,
                    drawerIcon: ({focused,size}) =>(
                        <Icon 
                            type = "material"
                            name = "person"
                            color = {focused ? THEME.COLORS.PRIMARY_800 : THEME.COLORS.TEXT_700}
                            size = {size}
                        />
                    )
                }}
            /> */}
        </Drawer.Navigator>
    )
}