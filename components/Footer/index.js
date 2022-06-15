import React from "react";
import {
  Container,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterColumn,
  FooterGrid,
  Logo,
  FooterLeftSide,
  FooterRightSide,
} from "./style";
import { FooterText, SmallText} from "../../config/theme/globalStyles";
import THEME from "../../config/theme";
import { footerSocialData, clientName } from "../../config/data";
import { Icon } from "react-native-elements";

const Footer = () => {
  return (
    <Container>
      <FooterLeftSide>
        <SmallText textAlign="flex-star"
          fontFamily={THEME.FONTFAMILY.BOLD}
          margin="0rem 0.5rem">{clientName}</SmallText>
        {footerSocialData.map((social, index) => (
								<Icon
									key={index}
                  type={social.type}
                  name={social.name}
									size={18}
                  iconStyle={{
                    color: THEME.COLORS.TEXT_800,
                    marginHorizontal: "0.2rem"
                  }}
								>
								</Icon>
							))}
      </FooterLeftSide>
      <FooterRightSide>
        <FooterText textAlign="flex-star" margin="0rem 0.5rem">
          Desenvolvido por
        </FooterText>
        <Logo source={require("./../../assets/blix.svg")}></Logo>
        <FooterText
          textAlign="flex-star"
          fontFamily={THEME.FONTFAMILY.BOLD}
          margin="0rem 0.5rem"
        >
          BLIX
        </FooterText>
      </FooterRightSide>
    </Container>
  );
};

export default Footer;
