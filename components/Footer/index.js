import React from "react";
import { Container, Logo, FooterLeftSide, FooterRightSide } from "./style";
import { FooterText } from "../../config/theme/globalStyles";
import THEME from "../../config/theme";
import { footerSocialData, clientName } from "../../config/data";
import { Icon } from "react-native-elements";
import { Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <FooterLeftSide>
        <FooterText textAlign="flex-star" fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem">{clientName}</FooterText>
        {footerSocialData.map((social, index) => (
          <Icon
            key={index}
            type={social.type}
            name={social.name}
            size={20}
            onPress={() => Linking.openURL(social.link)}
            iconStyle={{
              color: THEME.COLORS.TEXT_FOOTER,
              marginHorizontal: "0.2rem"
            }}
          >
          </Icon>
        ))}
         <FooterText fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem" onPress={() => navigation.navigate("TermsofUse")}>TERMOS DE USO E PRIVACIDADE</FooterText>
      </FooterLeftSide>
      <FooterRightSide>
        <FooterText margin="0rem 0.5rem">Desenvolvido por</FooterText>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/blix.aplicativos/")}>
          <Logo source={require("./../../assets/blix-color.svg")} ></Logo>
        </TouchableOpacity>
        <FooterText fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem" onPress={() => Linking.openURL("https://www.instagram.com/blix.aplicativos/")}>BLIX</FooterText>
      </FooterRightSide>
    </Container>
  );
};

export default Footer;
