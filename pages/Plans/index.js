import React from "react";
import Pricing from '../../components/Pricing';
import HeaderPurchase from '../../components/HeaderPurchase';
import { Container } from './style'
import Footer from "../../components/Footer";

export function Plans({ navigation: { goBack }, route }) {
  const { userId } = route.params;
  console.log('userIdPlan', userId);

  return (
    <Container>
     <HeaderPurchase />
      <Pricing navigation={navigation} userId={userId}></Pricing>
      <Footer></Footer>
    </Container>
  );
}
