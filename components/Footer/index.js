import React from "react";
import { Container, Logo, FooterLeftSide, FooterRightSide } from "./style";
import { FooterText, SmallText } from "../../config/theme/globalStyles";
import THEME from "../../config/theme";
import { footerSocialData, clientName } from "../../config/data";
import { Icon } from "react-native-elements";
import { Linking } from 'react-native';

const Footer = () => {
  return (
    <Container>
      <FooterLeftSide>
        <SmallText textAlign="flex-star" fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem">{clientName}</SmallText>
        {footerSocialData.map((social, index) => (
          <Icon
            key={index}
            type={social.type}
            name={social.name}
            size={THEME.FONTSIZE.EXTRAMEDIUM}
            onPress={() => Linking.openURL(social.link)}
            iconStyle={{
              color: THEME.COLORS.ICON_DRAWER,
              marginHorizontal: "0.2rem"
            }}
          >
          </Icon>
        ))}
      </FooterLeftSide>
      <FooterRightSide>
        <FooterText margin="0rem 0.5rem">Desenvolvido por</FooterText>
        <Logo source={require("./../../assets/blix.svg")}></Logo>
        <FooterText fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem">BLIX</FooterText>
      </FooterRightSide>
    </Container>
  );
};

export default Footer;
