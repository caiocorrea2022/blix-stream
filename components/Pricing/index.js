import React, { useEffect, useState } from 'react';
import { PricingCard } from "react-native-elements";
import { FlatList, TouchableOpacity, View } from 'react-native';
import {
  Container,
  TitleView,
  ItemContainer,
  HorizontalList,
  HorizontalListView,
} from "./style";
import THEME from '../../config/theme';
import { planFrequency, planPrices, planInfos, upsellPrices, subtitlePlan, pricingTitle } from '../../config/data';
import { Title, SmallText } from '../../config/theme/globalStyles';
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const cardSize = windowWidth * 0.23;

const Pricing = ({ userId }) => {
  const [selectedId, setSelectedId] = useState("1");
  const [option, setOption] = useState(planPrices[0]);
  const [upsell, setUpsell] = useState(upsellPrices[0]);
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(false)
  })

  const Item = ({ item, onPress, backgroundColor, color }) => (
    <ItemContainer style={[backgroundColor]}>
      <TouchableOpacity onPress={onPress}>
        <SmallText style={[color]}>{item.frequency}</SmallText>
      </TouchableOpacity>
    </ItemContainer>
  );

  const MobileOrDesktopCardSize = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <View>
        <TitleView>
          <Title>{pricingTitle}</Title>
          <SmallText margin="1rem">{subtitlePlan}</SmallText>
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
        <HorizontalListView>
          <HorizontalList horizontal={true}>
            {planInfos.map((item, index) => (
              <PricingCard
                key={item.id}
                color={THEME.COLORS.TEXT_ABOUT}
                title={item.planType}
                price={option[index].price}
                info={[
                  upsell[index],
                  item.info
                ]}
                titleStyle={{
                  fontSize: THEME.FONTSIZE.STANDARD,
                  justifyContent: "flex-start",
                  fontFamily: THEME.FONTFAMILY.BOLD,
                }}
                infoStyle={{
                  color: THEME.COLORS.TEXT_ABOUT,
                  fontSize: THEME.FONTSIZE.EXTRASMALL,
                  textAlign: 'center',
                  flex: '1 1 auto',
                  fontFamily: THEME.FONTFAMILY.LIGHT,
                }}
                pricingStyle={{
                  fontSize: THEME.FONTSIZE.BIG,
                  color: THEME.COLORS.SECONDARY_900,
                  justifyContent: "flex-start",
                  fontFamily: THEME.FONTFAMILY.BOLD,
                }}
                button={{
                  title: "ASSINAR",
                  loading: isLoading,
                  color: THEME.COLORS.PRIMARY_900,
                  titleStyle: {
                    color: THEME.COLORS.TEXT_BUTTON,
                    fontFamily: THEME.FONTFAMILY.BOLD,
                    fontSize: THEME.FONTSIZE.MEDIUM,
                  },
                  buttonStyle: { borderRadius: "10px" },
                }}
                containerStyle={{
                  backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
                  borderRadius: "15px",
                  width: windowWidth * 0.6,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: THEME.COLORS.TEXT_ABOUT,
                  display: "flex",
                  flexDrection: "column",
                }}
                wrapperStyle={{
                  flex: 1,
                }}
                onButtonPress={() => {
                  setLoading(true)
                  userId
                    ? navigation.navigate('CheckoutLoader', { userid: userId, priceId: option[index].priceId, purchaseType: "PLAN" })
                    : navigation.navigate("SignUp", { purchaseType: 'PLAN', priceId: option[index].priceId })
                }
                }
              />
            ))}
          </HorizontalList>
        </HorizontalListView>
      </View>
    ) : (
      <>
        <TitleView>
          <Title>{pricingTitle}</Title>
          <SmallText margin="1rem 8rem">{subtitlePlan}</SmallText>
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
        <HorizontalListView>
          <HorizontalList horizontal={true}>
            {planInfos.map((item, index) => (
              <PricingCard
                key={item.id}
                color={THEME.COLORS.TEXT_ABOUT}
                title={item.planType}
                price={option[index].price}
                info={[
                  upsell[index],
                  item.info
                ]}
                titleStyle={{
                  fontSize: THEME.FONTSIZE.STANDARD,
                  fontFamily: THEME.FONTFAMILY.BOLD,
                }}
                infoStyle={{
                  color: THEME.COLORS.TEXT_ABOUT,
                  fontSize: THEME.FONTSIZE.EXTRASMALL,
                  textAlign: 'center',
                  flex: '1 1 auto',
                  fontFamily: THEME.FONTFAMILY.LIGHT,
                }}
                pricingStyle={{
                  fontSize: THEME.FONTSIZE.BIG,
                  color: THEME.COLORS.SECONDARY_900,
                  justifyContent: "flex-start",
                  fontFamily: THEME.FONTFAMILY.BOLD,
                }}
                button={{
                  title: "ASSINAR",
                  loading: isLoading,
                  color: THEME.COLORS.PRIMARY_900,
                  titleStyle: {
                    color: THEME.COLORS.TEXT_BUTTON,
                    fontFamily: THEME.FONTFAMILY.BOLD,
                    fontSize: THEME.FONTSIZE.MEDIUM,
                  },
                  buttonStyle: { borderRadius: "10px" },
                }}
                containerStyle={{
                  backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
                  borderRadius: "15px",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#1e1e1e",
                  width: cardSize,
                  display: "flex",
                  flexDrection: "column",
                }}
                wrapperStyle={{
                  flex: 1,
                }}
                onButtonPress={() => {
                  setLoading(true)
                  userId
                    ? navigation.navigate('CheckoutLoader', { userid: userId, priceId: option[index].priceId, purchaseType: "PLAN" })
                    : navigation.navigate("SignUp", { purchaseType: 'PLAN', priceId: option[index].priceId })
                }
                }
              />
            ))}
          </HorizontalList>
        </HorizontalListView>
      </>
    )
  };


  const renderItem = ({ item, index }) => {
    const backgroundColor =
      item.id === selectedId ? THEME.COLORS.SECONDARY_900 : THEME.COLORS.SECONDARY_800;
    const color =
      item.id === selectedId ? THEME.COLORS.BACKGROUND_ABOUT : THEME.COLORS.TEXT_ABOUT;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id),
            setOption(planPrices[index]),
            setUpsell(upsellPrices[index]);
        }}
        backgroundColor={{ backgroundColor }}
        color={{ color }}
      />
    );
  };

  return (
    <ViewPortProvider>
      <Container>
        <MobileOrDesktopCardSize></MobileOrDesktopCardSize>
      </Container>
    </ViewPortProvider>
  );
};

export default Pricing;