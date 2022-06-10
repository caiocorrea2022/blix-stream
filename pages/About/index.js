import React from 'React';
import Header from '../../components/Header';
import {
  Container,
  Title,
  PricingView,
  CardView
} from "./style";
import CardInfo from '../../components/Card';
import Pricing from '../../components/Pricing';
import { categoriesInfo, coursesInfo } from '../../config/data';

export default function About({ navigation }) {
  return (
    <Container>
      <Header goBack={navigation.goBack} />
      <Title>CURSOS</Title>
      <CardView>
        <CardInfo array={coursesInfo} navigation={navigation}></CardInfo>
      </CardView>
      <PricingView>
        <Pricing navigation={navigation}></Pricing>
      </PricingView>

    </Container>
  );
}