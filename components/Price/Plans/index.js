import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { PricingCard } from "react-native-elements";
import { plans } from "../../../config/data";

function Plans({ navigation }) {
  const [option, setOption] = useState([monthlyPrice]);
  const monthlyPrice = ['R$0','R$0','R$0'];
  const quaterlyPrice = ['R$5','R$0','R$0'];
  const semiannualPrice = ['R$10','R$0','R$0'];
  const annualPrice = ['R$15','R$0','R$0'];


  return (
    <View style={{ flex: 1, backgroundColor: "blue", justifyContent: 'space-around'}}>
      <Text>PLANOS</Text>
      <Text>LALALLALALALLLALALLALALLLALALLALALALALALALLALALALLLLLLLLLLLLLLLLLLLLLLLLALOSIHSAOIHDIOHASIODHSIODH</Text>
      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {setOption([monthlyPrice]), console.log('oi', monthlyPrice[0], console.log(option))}}><Text>Mensal</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setOption([quaterlyPrice])}><Text>Trimestral</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setOption([semiannualPrice])}><Text>Semestral</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setOption([annualPrice])}><Text>Anual</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        {plans.map((item, index) => (
          <PricingCard
            key={item.planType}
            color="#4f9deb"
            title={item.planType}
            price={monthlyPrice[item]}
            info={[
              item.firstItem,
              item.secondItem,
              item.thirdItem,
              item.fourthItem,
              item.fiftItem,
            ]}
            button={{ title: "ASSINAR PLANO" }}
            containerStyle={{
              backgroundColor: "red",
              justifyContent: "center",
              width: "300px",
              height: "350px",
            }}
            wrapperStyle={{
              backgroundColor: "green",
              alignItems: "stretch",
              justifyContent: 'space-evenly',
              flex: 1,
            }}
            onButtonPress={() => navigation.navigate("Cadastro")}
          />
        ))}
        </View>
        </ScrollView>
      </View>
  );
}

export default Plans;
