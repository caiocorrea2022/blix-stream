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
import { coursesInfo, categoriesInfo } from "../../config/data";
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
import { Icon } from "react-native-elements";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
// import CookieConsentFunction from '../../components/CookieConsent/index';

const auth = getAuth();

export default function About({ navigation }) {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [plan, setPlan] = useState("");
  const text =
    "Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. Qui illum nobis ut modi Quis vel veniam voluptatibus et numquam sint ad voluptas repellendus est enim illum vel animi omnis! Ex animi asperiores qui nemo assumenda et corrupti necessitatibus quo accusantium impedit ea optio molestiae et sint dolorum?\n\nAt omnis internos ut incidunt modi ea sint. Ad inventore quidem id illo fugit id explicabo sunt. Qui nihil ducimus ad tempora eveniet qui quia dicta eum rerum aliquid?Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia.Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. Qui illum nobis ut modi Quis vel veniam voluptatibus et numquam sint ad voluptas repellendus est enim illum vel animi omnis! Ex animi asperiores qui nemo assumenda et corrupti necessitatibus quo accusantium impedit ea optio molestiae et sint dolorum?\n\nAt omnis internos ut incidunt modi ea sint. Ad inventore quidem id illo fugit id explicabo sunt. Qui nihil ducimus ad tempora eveniet qui quia dicta eum rerum aliquid?Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. Lorem ipsum dolor sit amet. In saepe beatae nam autem quasi et ullam quia. ";
  const [scrollX, setScrollX] = useState(0);

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
        console.log(user.uid);
        setUser(user.uid);
        getUsers(user.uid);
        setLogin(true);
      }
    });
  }, []);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    console.log(x);
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = categoriesInfo.length * 224; //192 eh o tamanho de cada card
    if (window.innerWidth > listW) {
      x = 0;
    } else if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 23 * categoriesInfo.length;
    }
    console.log(x);
    console.log(scrollX);
    console.log(listW);
    console.log(window.innerWidth);
    console.log(categoriesInfo.length);
    setScrollX(x);
  };

  const MobileOrDesktopLeftArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <Icon
        type="material-community"
        name="chevron-left"
        size={THEME.FONTSIZE.BIG}
        iconStyle={{
          color: THEME.COLORS.ICON_DRAWER,
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "5px",
        }}
        containerStyle={{
          position: "absolute",
          left: 0,
          zIndex: 99,
          height: "10rem",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onPress={handleLeftArrow}
      />
    );
  };

  const MobileOrDesktopRightArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <Icon
        type="material-community"
        name="chevron-right"
        size={THEME.FONTSIZE.BIG}
        iconStyle={{
          color: THEME.COLORS.ICON_DRAWER,
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "5px",
        }}
        containerStyle={{
          position: "absolute",
          right: 0,
          zIndex: 99,
          height: "10rem",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onPress={handleRightArrow}
      />
    );
  };

  return (
    <ViewPortProvider>
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
            <SmallText
              textAlign="flex-start"
              fontFamily={THEME.FONTFAMILY.REGULAR}
            >
              {text}
            </SmallText>
          </ViewSubtitleAboutMe>
        </ViewAboutMe>
        <Section>
          <ViewTitleAboutMe>
            <Title>CONTEÚDO DISPONÍVEL NO APP</Title>
          </ViewTitleAboutMe>
          <View style={{ flexDirection: "row", marginLeft: scrollX, overFlowX: "hidden" }}>
            <MobileOrDesktopLeftArrow></MobileOrDesktopLeftArrow>
            <CardInfo
              subtitleFontFamily={THEME.FONTFAMILY.REGULAR}
              subtitleFontSize={THEME.FONTSIZE.EXTRASMALL}
              subtitleColor={THEME.COLORS.FOOTER_TEXT}
              titleFontFamily={THEME.FONTFAMILY.BOLD}
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
            <MobileOrDesktopRightArrow></MobileOrDesktopRightArrow>
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
            subtitleFontFamily={THEME.FONTFAMILY.REGULAR}
            subtitleFontSize={THEME.FONTSIZE.EXTRASMALL}
            subtitleColor={THEME.COLORS.SMALL_TEXT}
            subtitleNumberOfLines={4}
            titleFontFamily={THEME.FONTFAMILY.BOLD}
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
    </ViewPortProvider>
  );
}
