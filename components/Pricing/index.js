import React, { useState } from 'react';
import { PricingCard } from "react-native-elements";
import { FlatList, TouchableOpacity } from 'react-native';
import {
  Container,
  TitleView,
  ItemContainer,
  HorizontalList,
  HorizontalListView,
} from "./style";
import THEME from '../../config/theme';
import { planFrequency, planPrices, planInfos, upsellPrices, subtitlePlan, pricingTitle } from '../../config/data';
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import { Title, SmallText, StandardText } from '../../config/theme/globalStyles';
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const numColumns = planInfos.length;
const cardSize = windowWidth*0.7/numColumns;

const Pricing = ({ navigation, userId }) => {
  const [selectedId, setSelectedId] = useState("1");
  const [option, setOption] = useState(planPrices[0]);
  const [upsell, setUpsell] = useState(upsellPrices[0]);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <ItemContainer style={[backgroundColor]}>
      <TouchableOpacity onPress={onPress}>
        <SmallText color={[textColor]}>{item.frequency}</SmallText>
      </TouchableOpacity>
    </ItemContainer>
  );

    const MobileOrDesktopCardSize = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <HorizontalListView>
        <HorizontalList horizontal={true}>
          {planInfos.map((item, index) => (
            <PricingCard
              key={index}
              color={THEME.COLORS.TEXT_ABOUT}
              title={item.planType}
              price={option[index].price}
              info={[
                upsell[index],
                ...item.info
              ]}
              titleStyle={{
                fontSize: THEME.FONTSIZE.STANDARD,
                justifyContent: "flex-start",
              }}
              titleFont={THEME.FONTFAMILY.BOLD}
              infoStyle={{
                color: THEME.COLORS.TEXT_ABOUT,
                fontSize: THEME.FONTSIZE.SMALL,
                textAlign: 'center',
                flex: '1 1 auto',
              }}
              pricingStyle={{
                fontSize: THEME.FONTSIZE.STANDARD,
                justifyContent: "flex-start",
              }}
              pricingFont={THEME.FONTFAMILY.MEDIUM}
              infoFont={THEME.FONTFAMILY.LIGHT}
              button={{
                title: "ASSINAR PLANO",
                color: THEME.COLORS.PRIMARY_900,
                titleStyle: {
                  color: THEME.COLORS.TEXT_BUTTON,
                  fontFamily: THEME.FONTFAMILY.BOLD,
                  fontSize: THEME.FONTSIZE.MEDIUM,
                },
                buttonStyle: { borderRadius: "10px" },
              }}
              containerStyle={{
                backgroundColor: THEME.COLORS.PRIMARY_800,
                borderRadius: "15px",
                width: windowWidth*0.6,
                display: "flex",
                flexDrection: "column",
              }}
              wrapperStyle={{
                flex:1,
              }}
              onButtonPress={() => 
                userId ?
                  createCheckoutSession(userId, option[index].priceId, "subscription", option[index].iterations) :
                  navigation.navigate("SignUp", { purchaseType: 'PLAN', priceId: option[index].priceId })
              }
            />
          ))}
        </HorizontalList>
      </HorizontalListView>
    ) : (
      <HorizontalListView>
        <HorizontalList horizontal={true}>
          {planInfos.map((item, index) => (
            <PricingCard
              key={index}
              color={THEME.COLORS.TEXT_ABOUT}
              title={item.planType}
              price={option[index].price}
              info={[
                upsell[index],
                ...item.info
              ]}
              titleStyle={{
                fontSize: THEME.FONTSIZE.STANDARD,
              }}
              titleFont={THEME.FONTFAMILY.BOLD}
              infoStyle={{
                color: THEME.COLORS.TEXT_ABOUT,
                fontSize: THEME.FONTSIZE.SMALL,
                textAlign: 'center',
                flex: '1 1 auto',
              }}
              pricingStyle={{
                fontSize: THEME.FONTSIZE.STANDARD,
                justifyContent: "flex-start",
              }}
              pricingFont={THEME.FONTFAMILY.MEDIUM}
              infoFont={THEME.FONTFAMILY.LIGHT}
              button={{
                title: "ASSINAR PLANO",
                color: THEME.COLORS.PRIMARY_900,
                titleStyle: {
                  color: THEME.COLORS.TEXT_BUTTON,
                  fontFamily: THEME.FONTFAMILY.BOLD,
                  fontSize: THEME.FONTSIZE.MEDIUM,
                },
                buttonStyle: { borderRadius: "10px" },
              }}
              containerStyle={{
                backgroundColor: THEME.COLORS.PRIMARY_800,
                borderRadius: "15px",
                width: cardSize,
                display: "flex",
                flexDrection: "column",
              }}
              wrapperStyle={{
                flex:1,
              }}
              onButtonPress={() => 
                userId ?
                  createCheckoutSession(userId, option[index].priceId, "subscription", option[index].iterations) :
                  navigation.navigate("SignUp", { purchaseType: 'PLAN', priceId: option[index].priceId })
              }
            />
          ))}
        </HorizontalList>
      </HorizontalListView>
        )
  };


  const renderItem = ({ item, index }) => {
    const backgroundColor =
      item.id === selectedId ? THEME.COLORS.PRIMARY_900 : THEME.COLORS.PRIMARY_800;
    const color =
      item.id === selectedId ? THEME.COLORS.TEXT_BUTTON : THEME.COLORS.TEXT_ABOUT;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id),
            setOption(planPrices[index]),
            setUpsell(upsellPrices[index]);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ViewPortProvider>
    <Container>
      <TitleView>
        <Title>{pricingTitle}</Title>
        <StandardText margin="0rem 1rem">{subtitlePlan}</StandardText>
        <FlatList
          data={planFrequency}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedId}
          numColumns={planFrequency.length}
          columnWrapperStyle={{ justifyContent: "center" }}
          style={{ flexGrow: 0 }}
        />
      </TitleView>
      <MobileOrDesktopCardSize></MobileOrDesktopCardSize>
    </Container>
    </ViewPortProvider>
  );
};

export default Pricing;