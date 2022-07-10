import React from "react";
import { HeaderLeftSide, Avatar, ContainerMobile } from "./style";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, FooterText } from "../../config/theme/globalStyles";
import { useAuth } from "../../context/useAuth";
import { aspectRatioLogoAbout } from '../../config/data';
import ViewPortProvider from '../../hooks/ViewPortProvider';
import useViewport from '../../hooks/useViewport';

const firstStep = "Escolher compra";
const secondStep = "Cadastrar-se";
const thirdStep = "Completar pagamento";

const HeaderPurchase = ({ signUp }) => {
  const { user } = useAuth();

  const MobileOrDesktopComponent = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint
      ?
      <ContainerMobile>
      <View style={{ alignItems: "flex-start", height: "2.5rem"}}>
        <Avatar
          resizeMode="contain"
          source={require("../../assets/LogoAbout.png")}
          aspectRatio={aspectRatioLogoAbout}
        />
        </View>
        <View style={{ alignItems: "flex-start", flexDirection: "row", padding: "1rem" }}>
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
      </View>
    </ContainerMobile>
      :
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
  };


  return (
    <ViewPortProvider>
    <MobileOrDesktopComponent></MobileOrDesktopComponent>
  </ViewPortProvider>
  )
};

export default HeaderPurchase;
