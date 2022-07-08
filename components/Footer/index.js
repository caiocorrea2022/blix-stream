import React from "react";
import { Container, Logo, FooterLeftSide, FooterRightSide } from "./style";
import { FooterText } from "../../config/theme/globalStyles";
import THEME from "../../config/theme";
import { footerSocialData, clientNameFooter } from "../../config/data";
import { Icon } from "react-native-elements";
import { Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import TouchableText from "../TouchableText";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <FooterLeftSide>
        <FooterText textAlign="flex-start" fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem">{clientNameFooter}</FooterText>
        {footerSocialData.map((social, index) => (
          <Icon
            key={index}
            type={social.type}
            name={social.name}
            size={20}
            onPress={() => Linking.openURL(social.link)}
            iconStyle={{
              color: THEME.COLORS.TEXT_FOOTER,
              marginHorizontal: "0.3rem"
            }}
          >
          </Icon>
        ))}
        <TouchableText
          onPress={() => navigation.navigate("TermsofUse")}
          title={"Termos de Uso"}
          textDecoration="underline"
          color={THEME.COLORS.TEXT_FOOTER}
          fontFamily={THEME.FONTFAMILY.LIGHT}
          fontSize={THEME.FONTSIZE.EXTRASMALL}
        ></TouchableText>
      </FooterLeftSide>

      <FooterRightSide>
        <FooterText padding="0rem 0.2rem">Desenvolvido com</FooterText>
        <Icon
          type="material-community"
          name="heart"
          color={THEME.COLORS.TEXT_FOOTER}
          size={15}
        />
        <FooterText padding="0rem 0.2rem">por</FooterText>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/blix.aplicativos/")}>
          <Logo source={require("./../../assets/blix-color.svg")} ></Logo>
        </TouchableOpacity>
        <FooterText fontFamily={THEME.FONTFAMILY.BOLD} padding="0rem 0.3rem" onPress={() => Linking.openURL("https://www.instagram.com/blix.aplicativos/")}>BLIX</FooterText>
      </FooterRightSide>
    </Container>
  );
};

export default Footer;
