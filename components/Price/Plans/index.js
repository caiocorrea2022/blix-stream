import React, { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { PricingCard } from "react-native-elements";
import {
  Container,
  SafeAreaView,
  Title,
  Subtitle,
  ItemName,
  ItemContainer,
  HorizontalList,
} from "./style";
import THEME from "../../../config/theme";
import { planFrequency, planPrices, planInfos, upsellPrices } from "../../../config/data";

function Plans({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
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
      item.id === selectedId ? THEME.COLORS.PRIMARY_900 : "#f1f1f1";
    const color = item.id === selectedId ? THEME.COLORS.BACKGROUND : "#1e1e1e";
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id), setOption(planPrices[index]), setUpsell(upsellPrices[index]);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <Container>
      <Title>PLANOS</Title>
      <Subtitle>
        Teste grátis por 7 dias. Pagamento automático no boleto ou no cartão de
        crédito. Pode cancelar quando desejar.
      </Subtitle>
      <SafeAreaView>
        <FlatList
          data={planFrequency}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedId}
          numColumns={planFrequency.length}
        />
      </SafeAreaView>
      <HorizontalList
        horizontal={true}
      >
        {planInfos.map((item, index) => (
          <PricingCard
            key={index}
            color={THEME.COLORS.TEXT_900}
            title={item.planType}
            price={option[index]}
            info={[
              upsell[index],
              item.firstItem,
              item.secondItem,
              item.thirdItem,
              item.fourthItem,
              item.fiftItem,
            ]}
            titleStyle={{
              fontSize: THEME.FONTSIZE.MEDIUM,
            }}
            titleFont={THEME.FONTFAMILY.BOLD}
            infoStyle={{
              color: THEME.COLORS.TEXT_900,
            }}
            pricingStyle={{
              fontSize: THEME.FONTSIZE.BIG,
            }}
            pricingFont={THEME.FONTFAMILY.MEDIUM}
            infoFont={THEME.FONTFAMILY.LIGHT}
            button={{ title: "ASSINAR PLANO", color: THEME.COLORS.BACKGROUND, titleStyle:{color: THEME.COLORS.TEXT_900, fontFamily: THEME.FONTFAMILY.BOLD }, buttonStyle:{borderRadius: "10px" }}}
            containerStyle={{
              backgroundColor: THEME.COLORS.PRIMARY_900,
              borderRadius: "15px",
              justifyContent: "center",
              width: "18rem",
              height: "28rem",
            }}
            wrapperStyle={{
              alignItems: "stretch",
              justifyContent: "space-evenly",
              flex: 1,
            }}
            onButtonPress={() => navigation.navigate("Cadastro")}
          />

        ))}
      </HorizontalList>
    </Container>
  );
}

export default Plans;
