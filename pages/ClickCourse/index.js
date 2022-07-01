import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ContentDesktop, ContentMobile, ContentList, Image, ViewText, ViewButton } from './style';
import Header from "../../components/Header";
import Button from "../../components/Button";
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import THEME from '../../config/theme';
import { FooterText, SmallText, Title, Container, MainTitle } from "../../config/theme/globalStyles";
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../services/firebase/index";

export function ClickCourse ({ route, navigation: { goBack } }) {
  const {courseId } = route.params;
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [footerText, setFooterText] = useState("");
  const [smallText, setSmallText] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [priceId, setPriceId] = useState("");
  const [infos, setInfos] = useState([]);
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
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ViewImage></ViewImage>
        <ViewFlatlist></ViewFlatlist>
      </View>
    );
  };

  const getCourse = async () => {
    const docRef = doc(firestore, "courses", courseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  };

  const ViewImage = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <ContentMobile>
        <Image source={{ uri: image }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">{title}</Title>
        {infos.map((i) => (
          <SmallText margin="1rem 0rem 0.5rem 0rem" textAlign="justify">{i}</SmallText>
        ))}
      </ContentMobile>
    ) : (
      <ContentDesktop>
        <Image source={{ uri: image }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">{title}</Title>
        {infos.map((i) => (
          <SmallText margin="1rem 0rem 0.5rem 0rem" textAlign="justify">{i}</SmallText>
        ))}
      </ContentDesktop>
    );
  };

  const goToPurchase = () => {
    setLoading(true);
    
    if(!login) {
      setLoading(false);
      return navigation.navigate("SignUp", { purchaseType: 'COURSE', priceId: priceId })
    } else {
      return createCheckoutSession(userId, priceId, "payment", 0)
      .finally(() => {
        setLoading(false);
      });
    }
  }

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;


    return width < breakpoint ? (
      <View>
        <ViewText>
          <Title margin="0.5rem 0rem">{price}</Title>
          <FooterText >{footerText}</FooterText>
          <SmallText >{smallText}</SmallText>
        </ViewText>
        <ViewButton>
          <Button
            title={'Comprar agora'}
            isLoading={loading}
            onPress={() => goToPurchase()}
          >
          </Button>
        </ViewButton>
      </View>
    ) : (
      <ContentList>
        <View>
          <MainTitle textAlign="flex-start" margin="0.5rem 0rem">{price}</MainTitle>
          <FooterText textAlign="justify">{footerText}</FooterText>
          <SmallText textAlign="justify">{smallText}</SmallText>
        </View>
        <ViewButton alignSelf="flex-start">
          <Button
            title={"Comprar agora"}
            isLoading={loading}
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
      getCourse().then((response) => {
        console.log(response.infos);
        setTitle(response.title);
        setImage(response.image);
        setInfos(response.infos);
        setSmallText(response.smallText);
        setFooterText(response.footerText);
        setPrice(response.price);
        setPriceId(response.priceId);
      })
    });

  }, []);

  return (
    <ViewPortProvider>
      <Container>
        <Header onPress={() => goBack()} background={THEME.COLORS.BACKGROUND_HEADER} />
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
};