import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ContentDesktop, ContentMobile, ContentList, Image, ViewText, ViewButton } from './style';
import Header from "../../components/Header";
import Button from "../../components/Button";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import THEME from '../../config/theme';
import { FooterText, SmallText, Title, Container, MainTitle } from "../../config/theme/globalStyles";
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from "firebase/auth";

const ClickCourse = ({ navigation, route }) => {
  const { item } = route.params;
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);

  const OutsideView = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <ViewImage></ViewImage>
        <ViewFlatlist></ViewFlatlist>
      </View>
    ) : (
      <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
        <ViewImage></ViewImage>
        <ViewFlatlist></ViewFlatlist>
      </View>
    );
  };

  const ViewImage = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <ContentMobile>
        <Image source={{ uri: item.image }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">{item.title}</Title>
        <SmallText textAlign="justify">{item.info}</SmallText>
      </ContentMobile>
    ) : (
      <ContentDesktop>
        <Image source={{ uri: item.image }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">{item.title}</Title>
        <SmallText textAlign="justify">{item.info}</SmallText>
      </ContentDesktop>
    );
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;


    const goToPurchase = () => {
      setLoading(true);
      
      if(!login) {
        setLoading(false);
        return navigation.navigate("SignUp", { purchaseType: 'COURSE', priceId: item.priceId })
      } else {
        return createCheckoutSession(userId, item.priceId, "payment", 0);
      }
    }


    return width < breakpoint ? (
      <View>
        <ViewText>
          <Title margin="0.5rem 0rem">{item.price}</Title>
          <FooterText >parcelado em até 12x</FooterText>
          <SmallText >✔ Garantia de 7 dias</SmallText>
        </ViewText>
        <ViewButton>
          <Button
            title={'Comprar agora'}
            isLoading={loading}
            colorbutton={THEME.COLORS.PRIMARY_900}
            colortitle={THEME.COLORS.TEXT_BUTTON}
            borderRadius="30px"
            onPress={() => goToPurchase()}
          >
          </Button>
        </ViewButton>
      </View>
    ) : (
      <ContentList>
        <View>
          <MainTitle textAlign="flex-start" margin="0.5rem 0rem">{item.price}</MainTitle>
          <FooterText textAlign="justify">parcelado em até 12x</FooterText>
          <SmallText textAlign="justify">✔ Garantia de 7 dias</SmallText>
        </View>
        <ViewButton alignSelf="flex-start">
          <Button
            title={"Comprar agora"}
            isLoading={loading}
            colorbutton={THEME.COLORS.PRIMARY_900}
            colortitle={THEME.COLORS.TEXT_BUTTON}
            borderRadius="30px"
            onPress={() => goToPurchase()}
          ></Button>
        </ViewButton>
      </ContentList>
    );
  };

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setLogin(true);
      }
    });

  }, []);

  return (
    <ViewPortProvider>
      <Container>
        <Header goBack={navigation.goBack} background={THEME.COLORS.BACKGROUND_HEADER} />
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
};

export default ClickCourse;