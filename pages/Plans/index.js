import React from "react";
import Pricing from '../../components/Pricing';
import Header from '../../components/Header';
import { Container } from '../../config/theme/globalStyles'

export function Plans({ navigation, route }) {
  const { userId } = route.params;
  console.log('userIdPlan', userId);

  return (
    <Container>
      <Header goBack={navigation.goBack} />
      <Pricing navigation={navigation} userId={userId}></Pricing>
    </Container>
  );
}
