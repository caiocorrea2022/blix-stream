import React, { useEffect, useState } from 'react';
import { Container, TitleView, Poster, } from "./style";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import CardInfo from '../../components/Card';
import { coursesInfo, categoriesInfo } from '../../config/data';
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Section, Title } from '../../config/theme/globalStyles';
import { firestore } from '../../services/firebase/index';
import { View } from 'react-native'
import THEME from '../../config/theme';
import Button from '../../components/Button';
import CookieConsentFunction from '../../components/CookieConsent/index';

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
      console.log('user', user)
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
          <Header background="none" navigation={navigation} login={login} main={false} about={true} />
          <Hero
            navigation={navigation}
            button={true}
            userId={user}
            plan={plan}
          >
          </Hero>
        </Poster>
      </Section>
      <Section>
        <View style={{ flex: 3 }}>
          <CardInfo subtitleFontFamily={THEME.FONTFAMILY.REGULAR} subtitleFontSize={THEME.FONTSIZE.EXTRASMALL} subtitleColor={"red"} subtitleNumberOfLines={4} titleFontFamily={THEME.FONTFAMILY.BOLD} titleFontSize={THEME.FONTSIZE.EXTRASMALL} titleColor={THEME.COLORS.EXTRASMALL} cardStyle={{ width: "12rem", margin: "1rem", height: "90%" }} cardCoverStyle={{ width: "100%", height: "30%", borderRadius: "8px" }} array={categoriesInfo} navigation={navigation} buttonVisible={false} priceVisible={false}></CardInfo>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title={'Ver todas as aulas'}
            colorbutton={THEME.COLORS.PRIMARY_900}
            onPress={() => navigation.navigate("Main")}
            colortitle={THEME.COLORS.BACKGROUND}>
          </Button>
        </View>
      </Section>
      <Section>
        <TitleView>
          <Title>CURSOS</Title>
        </TitleView>
        <CardInfo subtitleFontFamily={THEME.FONTFAMILY.REGULAR} subtitleFontSize={THEME.FONTSIZE.EXTRASMALL} subtitleColor={THEME.COLORS.SMALL_TEXT} subtitleNumberOfLines={4} titleFontFamily={THEME.FONTFAMILY.BOLD} titleFontSize={THEME.FONTSIZE.SMALL} titleColor={THEME.COLORS.SMALL} cardStyle={{ width: "20rem", margin: "1rem", flex: 1 }} cardCoverStyle={{ width: "100%", height: "40%" }} array={coursesInfo} navigation={navigation}></CardInfo>
      </Section>
      <Footer></Footer>
      <CookieConsentFunction></CookieConsentFunction>
    </Container>
  );
}
