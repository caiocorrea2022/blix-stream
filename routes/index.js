import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import { AppRoutes } from "./AppRoutes";
import { useAuth } from "../context/useAuth";
import { AuthRoutes } from "./AuthRoutes";

export default function Navigation() {
  const { user } = useAuth();
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {user ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}