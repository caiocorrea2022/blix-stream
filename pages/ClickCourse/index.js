import React from "react";
import { View } from "react-native";
import { Container, ContentDesktop, ContentMobile, ContentList, Image, Title, Text } from './style';
import Header from "../../components/Header";
import Button from "../../components/Button";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import THEME from '../../config/theme';
import ListHeader from "../../components/ListHeader";
import ClickClass from "../ClickClass";

const ClickCourse = ({ navigation }) => {
  // const { title, description, price } = route.params;

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
        <Image source={{ uri: 'https://picsum.photos/700' }} />
        <Title fontSize={THEME.FONTSIZE.BIG} fontFamily={THEME.FONTFAMILY.BOLD}>Titulo do texto</Title>
        <Text fontSize={THEME.FONTSIZE.SMALL}>Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit deserunt in officia libero eos officiis consequatur 33 velit repudiandae et atque praesentium.</Text>
      </ContentMobile>
    ) : (
      <ContentDesktop>
          <Image source={{ uri: 'https://picsum.photos/700' }} />
          <Title fontSize={THEME.FONTSIZE.BIG} fontFamily={THEME.FONTFAMILY.BOLD}>Titulo do texto</Title>
          <Text fontSize={THEME.FONTSIZE.SMALL}>Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit deserunt in officia libero eos officiis consequatur 33 velit repudiandae et atque praesentium. </Text>
      </ContentDesktop>
    );
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <View style={{ width: "70%", alignSelf: "center" }}>
          <Title fontSize={THEME.FONTSIZE.EXTRABIG} fontFamily={THEME.FONTFAMILY.BOLD}>R$ 1.450,00</Title>
          <Text fontSize={THEME.FONTSIZE.EXTRASMALL}>parcelado em até 12x</Text>
          <Text fontSize={THEME.FONTSIZE.SMALL}>✔ Garantia de 7 dias</Text>
        </View>
        <Button
          title={'Comprar agora'}
          colorbutton={THEME.COLORS.PRIMARY_900}
          colortitle={THEME.COLORS.TEXT_000}>
        </Button>
      </View>
    ) : (
      <ContentList>
        <View style={{ width: "70%", alignSelf: "center" }}>
          <Title fontSize={THEME.FONTSIZE.EXTRABIG} fontFamily={THEME.FONTFAMILY.BOLD}>R$ 1.450,00</Title>
          <Text fontSize={THEME.FONTSIZE.EXTRASMALL}>parcelado em até 12x</Text>
          <Text fontSize={THEME.FONTSIZE.SMALL}>✔ Garantia de 7 dias</Text>
        </View>
        <Button
          title={'Comprar agora'}
          colorbutton={THEME.COLORS.PRIMARY_900}
          colortitle={THEME.COLORS.TEXT_000}>
        </Button>
      </ContentList>
    );
  };

  return (
    <ViewPortProvider>
      <Container>
        <Header goBack={navigation.goBack} />
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
};

export default ClickCourse;