import React from "react";
import { HeaderLeftSide, Avatar } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, FooterText } from "../../config/theme/globalStyles";
import { useAuth } from "../../context/useAuth";
import { aspectRatioLogoAbout } from '../../config/data';

const firstStep = "Escolher compra";
const secondStep = "Cadastrar-se";
const thirdStep = "Completar pagamento";

const HeaderPurchase = ({ signUp }) => {
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <HeaderLeftSide style={{ alignItems: "center" }}>
        <Avatar
          resizeMode="contain"
          source={require("../../assets/LogoAbout.png")}
          aspectRatio={aspectRatioLogoAbout}
        />
        {signUp ? (
          <FooterText color={THEME.COLORS.ICON_HEADER}>
            {firstStep}
          </FooterText>
        ) : (
          <FooterText fontFamily={THEME.FONTFAMILY.MEDIUM} color={THEME.COLORS.PRIMARY_900}>
            {firstStep}
          </FooterText>
        )
        }
        <Icon
          type="material-community"
          name="chevron-right"
          size={THEME.FONTSIZE.SMALL}
          iconStyle={{
            color: THEME.COLORS.ICON,
            marginHorizontal: "0.2rem"
          }}
        />
        {user ? (
          <FooterText color={THEME.COLORS.ICON_HEADER}>
            {thirdStep}
          </FooterText>
        ) : signUp ? (
          <>
            <FooterText fontFamily={THEME.FONTFAMILY.MEDIUM} color={THEME.COLORS.PRIMARY_900}>
              {secondStep}
            </FooterText>
            <Icon
              type="material-community"
              name="chevron-right"
              size={THEME.FONTSIZE.SMALL}
              iconStyle={{
                color: THEME.COLORS.ICON,
              }}
            />
            <FooterText color={THEME.COLORS.ICON_HEADER}>
              {thirdStep}
            </FooterText>
          </>
        ) : (
          <>
            <FooterText color={THEME.COLORS.ICON_HEADER}>
              {secondStep}
            </FooterText>
            <Icon
              type="material-community"
              name="chevron-right"
              size={THEME.FONTSIZE.SMALL}
              iconStyle={{
                color: THEME.COLORS.ICON,
                marginHorizontal: "0.2rem"
              }}
            />
            <FooterText color={THEME.COLORS.ICON_HEADER}>
              {thirdStep}
            </FooterText>
          </>
        )}
      </HeaderLeftSide>
    </HeaderContainer>
  );
};

export default HeaderPurchase;
