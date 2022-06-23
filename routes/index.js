import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import { StackRoutes } from "./StackRoutes";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
        <StackRoutes/>
    </NavigationContainer>
  );
}