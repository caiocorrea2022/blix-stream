import React from "react";
import { HeaderDesktop, Avatar, ViewLogo, Content } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, FooterText } from "../../config/theme/globalStyles";
import { useAuth } from "../../context/useAuth";
import { aspectRatioLogoAbout } from '../../config/data';
import ViewPortProvider from '../../hooks/ViewPortProvider';
import useViewport from '../../hooks/useViewport';
import { View } from "react-native";

const firstStep = "Escolher compra";
const secondStep = "Cadastrar";
const thirdStep = "Completar pagamento";

const HeaderPurchase = ({ signUp }) => {
  const { user } = useAuth();

  const MobileOrDesktopComponent = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint
      ?
      <HeaderContainer flexDirection="column">
        <ViewLogo>
          <Avatar
            resizeMode="contain"
            source={require("../../assets/LogoAbout.png")}
            aspectRatio={aspectRatioLogoAbout}
          />
        </ViewLogo>
        <Content>
          {signUp ? (
            <View style={{flex:1}}>
              <FooterText color={THEME.COLORS.ICON_HEADER} numberOfLines={2}>
                {firstStep}
              </FooterText>
            </View>
          ) : (
            <View style={{flex:1}}>
              <FooterText fontFamily={THEME.FONTFAMILY.MEDIUM} color={THEME.COLORS.PRIMARY_900} numberOfLines={2}>
                {firstStep}
              </FooterText>
            </View>
          )
          }
          <Icon
            type="material-community"
            name="chevron-right"
            size={THEME.FONTSIZE.SMALL}
            iconStyle={{
              color: THEME.COLORS.ICON,
            }}
          />
          {user ? (
            <View style={{flex:1}}>
              <FooterText color={THEME.COLORS.ICON_HEADER} numberOfLines={2}>
                {thirdStep}
              </FooterText>
            </View>
          ) : signUp ? (
            <>
              <View style={{flex:1}}>
                <FooterText fontFamily={THEME.FONTFAMILY.MEDIUM} color={THEME.COLORS.PRIMARY_900} numberOfLines={2}>
                  {secondStep}
                </FooterText>
              </View>
              <Icon
                type="material-community"
                name="chevron-right"
                size={THEME.FONTSIZE.SMALL}
                iconStyle={{
                  color: THEME.COLORS.ICON,
                }}
              />
              <View style={{flex:1}}>
              <FooterText color={THEME.COLORS.ICON_HEADER} numberOfLines={2}>
                {thirdStep}
              </FooterText>
              </View>
            </>
          ) : (
            <>
              <View style={{flex:1}}>
                <FooterText color={THEME.COLORS.ICON_HEADER} numberOfLines={2}>
                  {secondStep}
                </FooterText>
              </View>
              <Icon
                type="material-community"
                name="chevron-right"
                size={THEME.FONTSIZE.SMALL}
                iconStyle={{
                  color: THEME.COLORS.ICON,
                }}
              />
              <View style={{flex:1}}>
                <FooterText color={THEME.COLORS.ICON_HEADER} numberOfLines={2}>
                  {thirdStep}
                </FooterText>
              </View>
            </>
          )}
        </Content>
      </HeaderContainer>
      :
      <HeaderContainer>
        <HeaderDesktop style={{ alignItems: "center" }}>
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
                }}
              />
              <FooterText color={THEME.COLORS.ICON_HEADER}>
                {thirdStep}
              </FooterText>
            </>
          )}
        </HeaderDesktop>
      </HeaderContainer>
  };


  return (
    <ViewPortProvider>
      <MobileOrDesktopComponent></MobileOrDesktopComponent>
    </ViewPortProvider>
  )
};

export default HeaderPurchase;
