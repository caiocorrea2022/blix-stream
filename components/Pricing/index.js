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
import { planFrequency, planPrices, planInfos, upsellPrices, subtitlePlan } from '../../config/data';
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";
import { Title, SmallText, StandardText } from '../../config/theme/globalStyles';

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
    <Container>
      <TitleView>
        <Title>PLANOS DE ASSINATURA</Title>
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
              }}
              pricingStyle={{
                fontSize: THEME.FONTSIZE.STANDARD,
                justifyContent: "flex-start"
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
                width: "20rem",
                height: "85%",
              }}
              wrapperStyle={{
                justifyContent: "space-between",
                flex: 1,
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
    </Container>
  );
};

export default Pricing;