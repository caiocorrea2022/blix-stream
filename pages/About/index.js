import React, { useEffect, useState } from "react";
import {
  Container,
  TitleView,
  Poster,
  ViewAboutMe,
  ViewTitleAboutMe,
  ViewSubtitleAboutMe,
} from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardInfo from "../../components/Card";
import Pricing from "../../components/Pricing";
import { coursesInfo, categoriesInfo, aboutText } from "../../config/data";
import { View } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Section,
  StandardText,
  SmallText,
  Title,
} from "../../config/theme/globalStyles";
import { firestore } from "../../services/firebase/index";
import THEME from "../../config/theme";
import Button from "../../components/Button";

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
      console.log("user", user);
      if (user) {
        setUser(user.uid);
        getUsers(user.uid);
        setLogin(true);
      }
    });
  }, []);

  return (
    <Container>
      <Section>
        <Poster source={require("../../assets/FotoAbout.jpg")}>
          <Header
            background="none"
            navigation={navigation}
            login={login}
            main={false}
            about={true}
          />
          <Hero
            navigation={navigation}
            button={true}
            userId={user}
            plan={plan}
          ></Hero>
        </Poster>
      </Section>
      <ViewAboutMe>
        <ViewTitleAboutMe>
          <StandardText>SOBRE MIM</StandardText>
        </ViewTitleAboutMe>
        <ViewSubtitleAboutMe>
          <SmallText textAlign="flex-start" fontFamily={THEME.FONTFAMILY.REGULAR}>
            {aboutText}
          </SmallText>
        </ViewSubtitleAboutMe>
      </ViewAboutMe>
      <Section>
        <ViewTitleAboutMe>
          <Title>CONTEÚDO DISPONÍVEL NO APP</Title>
        </ViewTitleAboutMe>
        <View>
          <CardInfo
            titleFontSize={THEME.FONTSIZE.EXTRASMALL}
            titleColor={THEME.COLORS.EXTRASMALL}
            cardStyle={{
              width: "12rem",
              margin: "1rem",
            }}
            cardCoverStyle={{
              width: "100%",
              height: "8rem",
              borderRadius: "8px",
            }}
            array={categoriesInfo}
            navigation={navigation}
            buttonVisible={false}
            priceVisible={false}
          ></CardInfo>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title={"Ver todas as aulas"}
            colorbutton={THEME.COLORS.PRIMARY_900}
            onPress={() => navigation.navigate("Main")}
            colortitle={THEME.COLORS.TEXT_BUTTON}
            borderRadius="30px"
          ></Button>
        </View>
      </Section>
      <Section>
        <TitleView>
          <Title>CURSOS DISPONÍVEIS</Title>
        </TitleView>
        <CardInfo
          subtitleNumberOfLines={4}
          titleFontSize={THEME.FONTSIZE.SMALL}
          titleColor={THEME.COLORS.SMALL}
          cardStyle={{ width: "18rem", margin: "1rem" }}
          cardCoverStyle={{
            width: "100%",
            height: "15rem",
            borderRadius: "8px",
          }}
          array={coursesInfo}
          navigation={navigation}
        ></CardInfo>
      </Section>
      <Section background={THEME.COLORS.PRIMARY_700}>
        <Pricing></Pricing>
      </Section>
      <Footer></Footer>
      {/* <CookieConsentFunction></CookieConsentFunction> */}
    </Container>
  );
}
