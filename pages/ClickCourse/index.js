import React from "react";
import { View } from "react-native";
import { ContentDesktop, ContentMobile, ContentList, Image } from './style';
import Header from "../../components/Header";
import Button from "../../components/Button";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import THEME from '../../config/theme';
import { FooterText, SmallText, Title, Container } from "../../config/theme/globalStyles";

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
        <Title textAlign="flex-start" margin="0.5rem 0rem">Titulo do texto</Title>
        <SmallText textAlign="justify">Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit deserunt in officia libero eos officiis consequatur 33 velit repudiandae et atque praesentium.</SmallText>
      </ContentMobile>
    ) : (
      <ContentDesktop>
        <Image source={{ uri: 'https://picsum.photos/700' }} />
        <Title textAlign="flex-start" margin="0.5rem 0rem">Titulo do texto</Title>
        <SmallText textAlign="justify">Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit deserunt in officia libero eos officiis consequatur 33 velit repudiandae et atque praesentium. </SmallText>
      </ContentDesktop>
    );
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <View style={{ width: "70%", alignSelf: "center" }}>
          <Title textAlign="flex-start" margin="0.5rem 0rem">R$ 1.450,00</Title>
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
      </View>
    ) : (
      <ContentList>
        <View style={{ width: "70%", alignSelf: "center" }}>
          <Title textAlign="flex-start" margin="0.5rem 0rem">R$ 1.450,00</Title>
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