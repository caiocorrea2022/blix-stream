import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  TitleView,
  Poster,
} from "./style";
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import CardInfo from '../../components/Card';
import Pricing from '../../components/Pricing';
import { coursesInfo } from '../../config/data';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Section } from '../../config/theme/globalStyles';
import { firestore } from '../../services/firebase';
import { doc, getDoc} from "firebase/firestore";

const auth = getAuth();

export default function About({ navigation }) {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [plan, setPlan] = useState("");

  const getUsers = async (user) => {
    const docRef = doc(firestore, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPlan(docSnap.data().plan);
        } 
};

    useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      console.log('user',user)
      if (user) {
       console.log(user.uid);
       setUser(user.uid);
       getUsers(user.uid);
       setLogin(true);
      } 
    });

  }, []);

  return (
    <Container>
      <Section>
      <Poster source={require('../../assets/FotoAbout.jpg')}>
      <Header navigation={navigation} login={login} main={false} about={true} />
          <Hero
          navigation={navigation}
          button={true}
          userId={user}
          plan={plan}
          ></Hero>
      </Poster>
      </Section>
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
