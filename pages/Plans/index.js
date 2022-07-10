import React from "react";
import Pricing from '../../components/Pricing';
import HeaderPurchase from '../../components/HeaderPurchase';
import { Container } from './style'
import Footer from "../../components/Footer";

export function Plans({ route }) {
  const { userId } = route.params;

  return (
    <Container>
     <HeaderPurchase />
      <Pricing userId={userId}></Pricing>
      <Footer></Footer>
    </Container>
  );
}
