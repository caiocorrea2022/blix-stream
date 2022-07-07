import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row, Avatar2} from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, StandardText } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';
import TouchableText from '../../components/TouchableText'
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/useAuth";

const Header = ({ onPress, about }) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    about ? (
      <HeaderContainer>
        <HeaderLeftSide>
          <Avatar
            resizeMode="contain"
            source={require("../../assets/LogoAbout.png")}
          />
        </HeaderLeftSide>
        <HeaderRightSide
        style={{alignItems: "center"}}
        >
          {user ? (
            <StandardText
              color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
              margin="0rem 1rem"
              onPress={onPress}
            >
              ACESSAR APLICATIVO
            </StandardText>
          ) : (
            <>
            <StandardText
            color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
            margin="0rem 1rem"
            onPress={onPress}
          >
            VER APLICATIVO
          </StandardText>
            <StandardText
              color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
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
            <></>
          ) : (
            <Icon
              type="material-community"
              name="menu"
              color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
              size={34}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Avatar2 resizeMode="contain" source={require("../../assets/LogoMain.png")} />
          </TouchableOpacity>
        </HeaderRightSide>
      </HeaderContainer>
    )
  );
};

export default Header;



