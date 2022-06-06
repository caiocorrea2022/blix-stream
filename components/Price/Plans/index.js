import React, { useState } from "react";
import { TouchableOpacity, Text, ScrollView, FlatList } from "react-native";
import { PricingCard } from "react-native-elements";
import {
  Container,
  SafeAreaView,
  Title,
  Subtitle,
  ItemName,
  ItemContainer,
} from "./style";
import theme from "../../../config/theme";
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
      item.id === selectedId ? theme.colors.primary_900 : "#f1f1f1";
    const color = item.id === selectedId ? "white" : "#1e1e1e";
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          flexDirection: "row",
        }}
        horizontal={true}
      >
        {planInfos.map((item, index) => (
          <PricingCard
            key={index}
            color={theme.colors.dark_gray}
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
              fontSize: theme.fontsSize.medium,
            }}
            titleFont={theme.fontsFamily.text_Bold}
            infoStyle={{
              color: theme.colors.dark_gray,
            }}
            pricingStyle={{
              fontSize: theme.fontsSize.big,
            }}
            pricingFont={theme.fontsFamily.text_Medium}
            infoFont={theme.fontsFamily.text_Light}
            button={{ title: "ASSINAR PLANO", color: theme.colors.background, titleStyle:{color: theme.colors.dark_gray, fontFamily: theme.fontsFamily.text_Bold }, buttonStyle:{borderRadius: "10px" }}}
            containerStyle={{
              backgroundColor: theme.colors.primary_900,
              borderRadius: "15px",
              justifyContent: "center",
              width: "300px",
              height: "450px",
            }}
            wrapperStyle={{
              alignItems: "stretch",
              justifyContent: "space-evenly",
              flex: 1,
            }}
            onButtonPress={() => navigation.navigate("Cadastro")}
          />

        ))}
      </ScrollView>
    </Container>
  );
}

export default Plans;
