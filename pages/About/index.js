import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  TitleView,
  PricingView,
  CardView
} from "./style";
import Header from '../../components/Header';
import CardInfo from '../../components/Card';
import Pricing from '../../components/Pricing';
import { coursesInfo } from '../../config/data';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Section } from '../../config/theme/globalStyles';

const auth = getAuth();

export default function About({ navigation }) {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);

    useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      console.log('user',user)
      if (user) {
       console.log(user.uid);
       setUser(user.uid);
       setLogin(true);
      } 
    });

  }, []);

  return (
    <Container>
      <Header navigation={navigation} login={login} main={false} about={true} />
      <Section>
        <TitleView>
          <Title>CURSOS</Title>
        </TitleView>
        <CardInfo array={coursesInfo} navigation={navigation}></CardInfo>
      </Section>
      <Section>
        <Pricing navigation={navigation}></Pricing>
      </Section>
    </Container>
  );
}
