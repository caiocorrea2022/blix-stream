import React from "react";
import Pricing from '../../components/Pricing';
import Header from '../../components/Header';
import { Container } from "./style";

function Plans({ navigation }) {

  return (
    <Container>
        <Header goBack={navigation.goBack} />
      <Pricing navigation={navigation}></Pricing>
    </Container>
  );
}

export default Plans;
