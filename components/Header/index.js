import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, StandardText } from "../../config/theme/globalStyles";
import { DrawerActions } from "@react-navigation/native";
import TouchableText from "../../components/TouchableText";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/useAuth";
import { aspectRatioLogoAbout, aspectRatioLogoMain } from '../../config/data';

const Header = ({ onPress, about}) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return about ? (
    <HeaderContainer>
      <HeaderLeftSide>
        <Avatar
          resizeMode="contain"
          source={require("../../assets/LogoAbout.png")}
          aspectRatio={aspectRatioLogoAbout}
        />
      </HeaderLeftSide>
        <HeaderRightSide style={{ alignItems: "center" }}>
          {user ? (
            <StandardText
              color={THEME.COLORS.ICON_HEADER_ABOUT}
              margin="0rem 1rem"
              onPress={onPress}
            >
              ACESSAR APLICATIVO
            </StandardText>
          ) : (
            <>
              <StandardText
                color={THEME.COLORS.ICON_HEADER_ABOUT}
                margin="0rem 1rem"
                onPress={onPress}
              >
                VER APLICATIVO
              </StandardText>
              <StandardText
                color={THEME.COLORS.ICON_HEADER_ABOUT}
                margin="0rem 1rem"
                onPress={() => navigation.navigate("Login")}
              >
                LOGIN
              </StandardText>
            </>
          )}
        </HeaderRightSide>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <HeaderLeftSide>
        {onPress ? (
          <Row>
            <Icon
              type="material-community"
              name="chevron-left"
              color={THEME.COLORS.ICON_HEADER_CLICKCLASS}
              size={THEME.FONTSIZE.BIG}
              onPress={onPress}
            />
            <TouchableText
              onPress={onPress}
              title={"Voltar"}
              color={THEME.COLORS.ICON_HEADER_CLICKCLASS}
            ></TouchableText>
          </Row>
        ) : (
          <Icon
            type="material-community"
            name="menu"
            color={THEME.COLORS.ICON_HEADER_MAIN}
            size={34}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )}
      </HeaderLeftSide>

      <HeaderRightSide>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Avatar
            resizeMode="contain"
            source={require("../../assets/LogoMain.png")}
            aspectRatio={aspectRatioLogoMain}
          />
        </TouchableOpacity>
      </HeaderRightSide>
    </HeaderContainer>
  );
};

export default Header;
