import React, { useEffect, useState } from "react";
import {
  Poster,
  ViewAboutMe,
  ViewText,
  ViewSection,
  ViewCookies,
  Container,
} from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardInfo from "../../components/Card";
import Pricing from "../../components/Pricing";
import {
  categoriesInfo,
  aboutText,
  aboutTitle,
  aboutTitleCategory,
  aboutTitleCourses,
  planInfos,
} from "../../config/data";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Section,
  Title,
  SubTitle,
  StandardText,
} from "../../config/theme/globalStyles";
import { firestore } from "../../services/firebase/index";
import THEME from "../../config/theme";
import Button from "../../components/Button";
import { Cookie } from "../../components/CookieConsent";
import { SafeAreaView, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const auth = getAuth();

export function About({ navigation }) {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [plan, setPlan] = useState("");
  const [coursesInfo, setCoursesInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async (user) => {
    const docRef = doc(firestore, "users", user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setPlan(docSnap.data().plan);
      setIsLoading(false);
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
    getCourses()
      
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        setUser(user.uid);
        getUsers(user.uid);
        setLogin(true);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  return (isLoading ?
    (<ActivityIndicator style={{ flex: 1, backgroundColor:THEME.COLORS.BACKGROUND_ABOUT }} color={THEME.COLORS.PRIMARY_800}/>) : (
    <SafeAreaView>
      <Container>
        <Section>
          <Poster source={require("../../assets/FotoAbout.jpg")}>
            <Header
              about={true}
              onPress={() => navigation.navigate("Drawer")}
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
            <SubTitle>{aboutTitle}</SubTitle>
          </ViewText>
          <ViewText>
            <StandardText
              textAlign="flex-start"
              fontFamily={THEME.FONTFAMILY.REGULAR}
              style={{ lineHeight: "2" }}
            >
              {aboutText}
            </StandardText>
          </ViewText>
        </ViewAboutMe>
        <ViewSection>
          <ViewText>
            <Title>{aboutTitleCategory}</Title>
          </ViewText>
          <CardInfo
            titleFontSize={THEME.FONTSIZE.EXTRASMALL}
            titleColor={THEME.COLORS.TEXT_ABOUT}
            cardStyle={{
              width: "12rem",
              margin: "1rem",
              display: "flex",
              flexDrection: "column",
              backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
            }}
            cardCoverStyle={{
              width: "100%",
              height: "7rem",
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
            cardContentStyle={{
              flex: "1 1 auto",
            }}
            array={categoriesInfo}
            navigation={navigation}
            buttonVisible={false}
            priceVisible={false}
            cardWidth={192} //12rem em px
          ></CardInfo>
          </ViewSection>
          {coursesInfo.length > 0 ? (
          <ViewSection>
          <ViewText>
            <Title>{aboutTitleCourses}</Title>
          </ViewText>
          <CardInfo
                subtitleNumberOfLines={5}
                titleFontSize={THEME.FONTSIZE.SMALL}
                titleColor={THEME.COLORS.TEXT_ABOUT}
                cardStyle={{
                  width: "18rem",
                  margin: "1rem",
                  display: "flex",
                  flexDrection: "column",
                  backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
                }}
                cardCoverStyle={{
                  width: "100%",
                  height: "10rem",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                }}
                cardContentStyle={{
                  flex: "1 1 auto",
                }}
                array={coursesInfo}
                navigation={navigation}
                cardWidth={310} //19rem em px
              ></CardInfo>
            </ViewSection>
        ) : (
          <></>
        )}
        {plan ? (
          <></>
        ) : (
          planInfos.length > 0 ?
            (<ViewSection>
              <Pricing userId={user}></Pricing>
            </ViewSection>) : (
              <></>
            )
        )}
        <View>
          <Footer></Footer>
        </View>
      </Container>
      <ViewCookies>
        <Cookie debug={true}></Cookie>
      </ViewCookies>
    </SafeAreaView>
    )
  );
}
