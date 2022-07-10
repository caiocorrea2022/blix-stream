import React from "react";
import Pricing from '../../components/Pricing';
import HeaderPurchase from '../../components/HeaderPurchase';
import Footer from "../../components/Footer";
import { View, SafeAreaView } from "react-native";
import THEME from "../../config/theme";

export function Plans({ route }) {
  const { userId } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: THEME.COLORS.BACKGROUND_ABOUT, justifyContent: "space-between", flex: 1 }}>
        <HeaderPurchase />
        <Pricing userId={userId}></Pricing>
        <Footer></Footer>
      </View>
    </SafeAreaView>
  );
}
