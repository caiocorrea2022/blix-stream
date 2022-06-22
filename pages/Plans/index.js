import React from "react";
import Pricing from '../../components/Pricing';
import Header from '../../components/Header';
import { Container } from '../../config/theme/globalStyles'
import THEME from "../../config/theme";

function Plans({ navigation, route }) {
  const { userId } = route.params;
  console.log('userIdPlan', userId);

  return (
    <Container background={THEME.COLORS.PRIMARY_800}>
      <Header goBack={navigation.goBack} login={true} main={false} about={false} />
      <Pricing navigation={navigation} userId={userId}></Pricing>
    </Container>
  );
}

export default Plans;
