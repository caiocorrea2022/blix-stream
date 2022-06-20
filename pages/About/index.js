import React, { useEffect, useState } from "react";
import {
  Poster,
  ViewAboutMe,
  ViewText,
  ViewSection
} from "./style";
import { DrawerActions } from "@react-navigation/native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardInfo from "../../components/Card";
import Pricing from "../../components/Pricing";
import { categoriesInfo, aboutText } from "../../config/data";
import { View } from "react-native";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Section,
  StandardText,
  SmallText,
  Title,
  Container
} from "../../config/theme/globalStyles";
import { firestore } from "../../services/firebase/index";
import THEME from "../../config/theme";
import Button from "../../components/Button";

const auth = getAuth();

export default function About({ navigation }) {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [plan, setPlan] = useState("");
  const [coursesInfo, setCoursesInfo] = useState([]);


  const getUsers = async (user) => {
    const docRef = doc(firestore, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setPlan(docSnap.data().plan);
    }
  };

  const getCourses = async () => {
    const response = await getDocs(collection(firestore, "courses"));
      let courses = [];
      response.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      setCoursesInfo(courses);
  };

  useEffect(() => {
    getCourses();
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        setUser(user.uid);
        getUsers(user.uid);
        setLogin(true);
      }
    });
  }, []);

  const jumpToAction = DrawerActions.jumpTo("Aulas");

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
        <ViewText>
          <StandardText>SOBRE MIM</StandardText>
        </ViewText>
        <ViewText>
          <SmallText textAlign="flex-start" fontFamily={THEME.FONTFAMILY.REGULAR}>
            {aboutText}
          </SmallText>
        </ViewText>
      </ViewAboutMe>
      <ViewSection>
        <ViewText>
          <Title>CONTEÚDO DISPONÍVEL NO APP</Title>
        </ViewText>
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
        <ViewAboutMe>
          <Button
            title={"Ver todas as aulas"}
            colorbutton={THEME.COLORS.PRIMARY_900}
            onPress={() => navigation.dispatch(jumpToAction)}
            colortitle={THEME.COLORS.TEXT_BUTTON}
            borderRadius="30px"
          ></Button>
        </ViewAboutMe>
      </ViewSection>
      <ViewSection>
        <ViewText>
          <Title>CURSOS DISPONÍVEIS</Title>
        </ViewText>
        <CardInfo
          subtitleNumberOfLines={4}
          titleFontSize={THEME.FONTSIZE.SMALL}
          titleColor={THEME.COLORS.SMALL}
          cardStyle={{
            width: "18rem",
            margin: "1rem",
          }}
          cardCoverStyle={{
            width: "100%",
            height: "10rem",
            borderRadius: "8px",
          }}
          cardContentStyle={{
            height: "45%",
          }}
          array={coursesInfo}
          navigation={navigation}
        ></CardInfo>
      </ViewSection>
      {plan ? (
        <></>
      ) : (
        <Section background={THEME.COLORS.PRIMARY_700}>
          <Pricing></Pricing>
        </Section>
      )}
      <Footer></Footer>
      {/* <CookieConsentFunction></CookieConsentFunction> */}
    </Container>
  );
}
