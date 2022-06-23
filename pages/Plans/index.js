import React from "react";
import Pricing from '../../components/Pricing';
import Header from '../../components/Header';
import { Container } from '../../config/theme/globalStyles'
import THEME from "../../config/theme";

export function Plans({ navigation, route }) {
  const { userId } = route.params;
  console.log('userIdPlan', userId);

  return (
    <Container>
      <Header goBack={navigation.goBack} login={true} main={false} about={false} />
      <Pricing navigation={navigation} userId={userId}></Pricing>
    </Container>
  );
}
