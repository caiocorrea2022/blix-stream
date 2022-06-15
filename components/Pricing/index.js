import React, { useState } from 'react';
import { PricingCard } from "react-native-elements";
import { FlatList, TouchableOpacity } from 'react-native';
import {
  Title,
  Container,
  TitleView,
  Subtitle,
  ItemName,
  ItemContainer,
  HorizontalList,
  HorizontalListView,
} from "./style";
import THEME from '../../config/theme';
import { planFrequency, planPrices, planInfos, upsellPrices, subtitlePlan } from '../../config/data';
import { createCheckoutSession } from "../../services/stripe/createCheckoutSession";

const Pricing = ({ navigation, userId }) => {
  const [selectedId, setSelectedId] = useState("1");
  const [option, setOption] = useState(planPrices[0]);
  const [upsell, setUpsell] = useState(upsellPrices[0]);


  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <ItemContainer style={[backgroundColor]}>
      <TouchableOpacity onPress={onPress}>
        <ItemName style={[textColor]}>{item.frequency}</ItemName>
      </TouchableOpacity>
    </ItemContainer>
  );

  const renderItem = ({ item, index }) => {
    const backgroundColor =
      item.id === selectedId ? THEME.COLORS.PRIMARY_900 : THEME.COLORS.TEXT_000;
    const color =
      item.id === selectedId ? THEME.COLORS.BACKGROUND : THEME.COLORS.TEXT_900;
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
        <Title>PLANOS</Title>
        <Subtitle>{subtitlePlan}</Subtitle>
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
              color={THEME.COLORS.TEXT_900}
              title={item.planType}
              price={option[index]}
              info={[
                upsell[index],
                ...item.info
              ]}
              titleStyle={{
                fontSize: THEME.FONTSIZE.MEDIUM,
              }}
              titleFont={THEME.FONTFAMILY.BOLD}
              infoStyle={{
                color: THEME.COLORS.TEXT_900,
                fontSize: THEME.FONTSIZE.EXTRASMALL,
              }}
              pricingStyle={{
                fontSize: THEME.FONTSIZE.MEDIUM,
                justifyContent:"flex-start"
              }}
              pricingFont={THEME.FONTFAMILY.MEDIUM}
              infoFont={THEME.FONTFAMILY.LIGHT}
              button={{
                title: "ASSINAR PLANO",
                color: THEME.COLORS.BACKGROUND,
                titleStyle: {
                  color: THEME.COLORS.TEXT_900,
                  fontFamily: THEME.FONTFAMILY.BOLD,
                  fontSize: THEME.FONTSIZE.MEDIUM,
                },
                buttonStyle: { borderRadius: "10px" },
              }}
              containerStyle={{
                backgroundColor: THEME.COLORS.PRIMARY_900,
                borderRadius: "15px",
                width: "20rem",
                height: "85%",
              }}
              wrapperStyle={{
                justifyContent:"space-between",
                flex: 1,
              }}
              onButtonPress={() => 
                userId?                 
                createCheckoutSession(userId, "price_1L5qw3CmcyIwF9rcW6VuPvSg", "subscription", 6):
                navigation.navigate("SignUp")
              }
            />
          ))}
        </HorizontalList>
      </HorizontalListView>
    </Container>
  );
};

export default Pricing;