import React from "react";
import { HeaderLeftSide, Avatar, Row, Avatar2, HeaderMiddle } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, FooterText } from "../../config/theme/globalStyles";
import { useAuth } from "../../context/useAuth";

const firstStep = "Escolher compra";
const stepIcon = ">";
const secondStep = "Cadastrar-se";
const thirdStep = "Completar pagamento";

const HeaderPurchase = ({ signUp }) => {
  const { user } = useAuth();

  return (
    <HeaderContainer style={{ alignItems: "center" }}>
      <HeaderLeftSide>
        <Avatar
          resizeMode="contain"
          source={require("../../assets/LogoAbout.png")}
        />
        <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
          {firstStep}
        </FooterText>
        <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
          {stepIcon}
        </FooterText>
        {user ? (
          <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
            {thirdStep}
          </FooterText>
        ) : signUp ? (
          <>
            <FooterText fontFamily={THEME.FONTFAMILY.MEDIUM} color={THEME.COLORS.PRIMARY_900} margin="0rem 1rem">
              {secondStep}
            </FooterText>
            <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
              {stepIcon}
            </FooterText>
            <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
              {thirdStep}
            </FooterText>
          </>
        ) : (
          <>
            <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
              {secondStep}
            </FooterText>
            <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
              {stepIcon}
            </FooterText>
            <FooterText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem">
              {thirdStep}
            </FooterText>
          </>
        )}
      </HeaderLeftSide>
    </HeaderContainer>
  );
};

export default HeaderPurchase;
