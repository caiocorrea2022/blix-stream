import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ContentDesktop, ContentMobile, ContentList, Image, ViewText, ViewButton, Container } from './style';
import HeaderPurchase from "../../components/HeaderPurchase";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import THEME from '../../config/theme';
import { FooterText, SmallText, Title, MainTitle } from "../../config/theme/globalStyles";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../services/firebase/index";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native";

export function ClickCourse({ route }) {
  const { courseId } = route.params;
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [footerText, setFooterText] = useState("");
  const [smallText, setSmallText] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [priceId, setPriceId] = useState("");
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

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
      setTitle(docSnap.data().title);
      setImage(docSnap.data().image);
      setInfos(docSnap.data().infos);
      setSmallText(docSnap.data().smallText);
      setFooterText(docSnap.data().footerText);
      setPrice(docSnap.data().price);
      setPriceId(docSnap.data().priceId);
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
            onPress={() => {
              setLoading(true);
              userId
                ?  navigation.navigate('CheckoutLoader', { userid: userId, priceId: priceId, purchaseType: "COURSE" })
                : navigation.navigate("SignUp", { purchaseType: 'COURSE', priceId: priceId })
            }}
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
            onPress={() => {
              userId
                ? (setLoading(true),
                  navigation.navigate('CheckoutLoader', { userid: userId, priceId: priceId, purchaseType: "COURSE" })
                )
                : navigation.navigate("SignUp", { purchaseType: 'COURSE', priceId: priceId })
            }}
          ></Button>
        </ViewButton>
      </ContentList>
    );
  };

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
      getCourse();
    });
  }, []);

  return (
    <ViewPortProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: THEME.COLORS.BACKGROUND_ABOUT, justifyContent: "space-between", flex: 1 }}>
          <HeaderPurchase background={THEME.COLORS.BACKGROUND_HEADER} />
          <OutsideView></OutsideView>
          <Footer></Footer>
        </View>
      </SafeAreaView>
    </ViewPortProvider>
  );
};