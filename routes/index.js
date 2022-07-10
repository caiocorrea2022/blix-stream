import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import { AppRoutes } from "./AppRoutes";
import { useAuth } from "../context/useAuth";
import { AuthRoutes } from "./AuthRoutes";
import { ActivityIndicator } from "react-native-paper";
import THEME from '../config/theme'

export default function Navigation() {
  const { user, loading } = useAuth();
  return (
    loading ? <ActivityIndicator style={{flex: 1, backgroundColor:THEME.COLORS.BACKGROUND_ABOUT}} color={THEME.COLORS.PRIMARY_800}/> :
    <NavigationContainer linking={LinkingConfiguration}>
      {user ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}