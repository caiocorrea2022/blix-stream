import React from "react";
import { View } from "react-native";
import { ContentDesktop, ContentMobile, ContentList, Image } from './style';
import Header from "../../components/Header";
import Button from "../../components/Button";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import THEME from '../../config/theme';
import { FooterText, SmallText, Title, Container } from "../../config/theme/globalStyles";
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from "firebase/auth";

const ClickCourse = ({ navigation, route }) => {
  const {item} = route.params;
  const [userId, setUserId] = useState("");

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
        <Image source={{ uri: item.Image }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">{item.title}</Title>
        <SmallText textAlign="justify">{item.description}</SmallText>
      </ContentMobile>
    ) : (
      <ContentDesktop>
        <Image source={{ uri: item.image }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">{item.title}</Title>
        <SmallText textAlign="justify">{item.description}</SmallText>
      </ContentDesktop>
    );
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <View style={{ width: "70%", alignSelf: "center" }}>
          <Title textAlign="flex-start" margin="0.5rem 0rem">{item.price}</Title>
          <FooterText textAlign="justify">parcelado em até 12x</FooterText>
          <SmallText textAlign="justify">✔ Garantia de 7 dias</SmallText>
        </View>
        <Button
          title={'Comprar agora'}
          colorbutton={THEME.COLORS.PRIMARY_900}
          colortitle={THEME.COLORS.TEXT_BUTTON}
          borderRadius="30px"
          onPress={()=> createCheckoutSession(user.uid, item.priceId, "payment", 0)}
          >
        </Button>
      </View>
    ) : (
      <ContentList>
        <View style={{ width: "70%", alignSelf: "center" }}>
          <Title textAlign="flex-start" margin="0.5rem 0rem">{item.price}</Title>
          <FooterText textAlign="justify">parcelado em até 12x</FooterText>
          <SmallText textAlign="justify">✔ Garantia de 7 dias</SmallText>
        </View>
        <Button
          title={'Comprar agora'}
          colorbutton={THEME.COLORS.PRIMARY_900}
          colortitle={THEME.COLORS.TEXT_BUTTON}
          borderRadius="30px"
          >
        </Button>
      </ContentList>
    );
  };

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUserId(user.uid);
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