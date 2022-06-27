import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import { AppRoutes } from "./AppRoutes";
import { useAuth } from "../context/useAuth";
import { AuthRoutes } from "./AuthRoutes";
import { ActivityIndicator } from 'react-native';

export default function Navigation() {
  const { user, loading } = useAuth();
  return (
    loading ? <ActivityIndicator color="transparent" /> :
    <NavigationContainer linking={LinkingConfiguration}>
      {user ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}