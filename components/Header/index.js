import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer, StandardText } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';
import TouchableText from '../../components/TouchableText'
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/useAuth";

const Header = ({ goBack, about }) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    about ? (
      <HeaderContainer>
        <HeaderLeftSide>
          <Avatar
            resizeMode="contain"
            source={require("../../assets/Logo.jpg")}
          />
        </HeaderLeftSide>
        <HeaderRightSide>
          {user ? (
            <StandardText
              color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
              margin="0rem 1rem"
              onPress={() => navigation.navigate("Drawer", { screen: 'Aulas' })}
            >
              ACESSAR AULAS
            </StandardText>
          ) : (
            <StandardText
              color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
              margin="0rem 1rem"
              onPress={() => navigation.navigate("Login")}
            >
              LOGIN
            </StandardText>
          )}
        </HeaderRightSide>
      </HeaderContainer>
    ) : (
      <HeaderContainer>
        <HeaderLeftSide>
          {goBack ? (
            <Row>
              <Icon
                type="material-community"
                name="chevron-left"
                color={THEME.COLORS.ICON_HEADER}
                size={THEME.FONTSIZE.BIG}
                onPress={goBack}
              />
              <TouchableText onPress={() => goBack()} title={'Voltar'} color={THEME.COLORS.ICON_HEADER}></TouchableText>
            </Row>
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
            <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
          </TouchableOpacity>
        </HeaderRightSide>
      </HeaderContainer>
    )
  );
};

export default Header;



