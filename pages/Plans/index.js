import React from "react";
import Pricing from '../../components/Pricing';
import Header from '../../components/Header';
import { Container } from './style'

export function Plans({ navigation: { goBack }, route }) {
  const { userId } = route.params;
  console.log('userIdPlan', userId);

  return (
    <Container>
      <Header onPress={() => goBack()} />
      <Pricing navigation={navigation} userId={userId}></Pricing>
    </Container>
  );
}
