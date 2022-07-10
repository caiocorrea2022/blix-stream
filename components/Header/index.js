import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, SmallText } from "../../config/theme/globalStyles";
import { DrawerActions } from "@react-navigation/native";
import TouchableText from "../../components/TouchableText";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/useAuth";
import { aspectRatioLogoAbout, aspectRatioLogoMain } from "../../config/data";
import Button from "../Button";
import { auth } from '../../services/firebase'
import { signOut } from "firebase/auth";

const Header = ({ ClickClass, about, onPress2, onPress }) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const logout = () => {
    signOut(auth).then(() => {
      window.location.assign('../About');
    }).catch((error) => {
      console.log('deu erro', error)
    });
  }

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
          <>
            <Button
              title={"Acessar conteúdo"}
              colorbutton="transparent"
              onPress={onPress}
              fontFamily={THEME.FONTFAMILY.REGULAR}
              fontSize={THEME.FONTSIZE.SMALL}
              padding="0.3rem"
            ></Button>
            <Button
              title={"Logout"}
              colorbutton="transparent"
              onPress={logout}
              fontFamily={THEME.FONTFAMILY.REGULAR}
              fontSize={THEME.FONTSIZE.SMALL}
              padding="0.3rem"
            ></Button>
          </>
        ) : (
          <>
          <View style={{marginRight:"1rem"}}>
            <Button
              title={"Visualizar Conteúdo"}
              colorbutton="transparent"
              onPress={onPress}
              fontFamily={THEME.FONTFAMILY.REGULAR}
              fontSize={THEME.FONTSIZE.SMALL}
              padding="0.3rem"
            ></Button>
            </View>
            <Button
              title={"Login"}
              colorbutton="transparent"
              onPress={() => navigation.navigate("Login")}
              fontFamily={THEME.FONTFAMILY.REGULAR}
              fontSize={THEME.FONTSIZE.SMALL}
              padding="0.3rem"
            ></Button>
          </>
        )}
      </HeaderRightSide>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <HeaderLeftSide>
        {ClickClass ? (
          <></>
        ) : onPress2 ? (
          <Row>
            <Icon
              type="material-community"
              name="chevron-left"
              color={THEME.COLORS.ICON_HEADER}
              size={THEME.FONTSIZE.BIG}
              onPress={onPress2}
            />
            <TouchableText
              onPress={onPress2}
              title={"Voltar"}
              color={THEME.COLORS.ICON_HEADER}
            ></TouchableText>
          </Row>
        ) : (
          <Icon
            type="material-community"
            name="menu"
            color={THEME.COLORS.ICON_HEADER_MAIN}
            size="34px"
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
