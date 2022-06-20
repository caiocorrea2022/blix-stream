import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';
import { StandardText } from "../../config/theme/globalStyles";
import TouchableText from '../../components/TouchableText'
import { TouchableOpacity } from "react-native";

const Header = ({ login, goBack, navigation, about, background }) => {
  const jumpToAction = DrawerActions.jumpTo('Aulas');

  return (
    login ? (
      <HeaderContainer background={background}>
        <HeaderLeftSide>
          {goBack ? (
            <Row>
              <Icon
                type="material-community"
                name="chevron-left"
                color={THEME.COLORS.PRIMARY_900}
                size={THEME.FONTSIZE.BIG}
                onPress={goBack}
              />
              <TouchableText onPress={() => goBack()} title={'Voltar'} color={THEME.COLORS.PRIMARY_900}></TouchableText>
            </Row>
          ) : (
            <Icon
              type="material-community"
              name="menu"
              color={THEME.COLORS.ICON_HEADER}
              size={34}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? (
            <>
              <StandardText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem" onPress={() => navigation.dispatch(jumpToAction)}>ACESSAR AULAS</StandardText>
              <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
            </>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigatorScreen")}>
              <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
            </TouchableOpacity>
          )}
        </HeaderRightSide>
      </HeaderContainer>
    ) : (
      <HeaderContainer background={background}>
        <HeaderLeftSide>
          {goBack ? (
            <Row>
              <Icon
                type="material-community"
                name="chevron-left"
                color={THEME.COLORS.PRIMARY_900}
                size={THEME.FONTSIZE.BIG}
                onPress={goBack}
              />
              <TouchableText onPress={() => goBack()} title={'Voltar'} color={THEME.COLORS.PRIMARY_900}></TouchableText>
            </Row>
          ) : (
            <Icon
              type="material-community"
              name="menu"
              color={THEME.COLORS.ICON_HEADER}
              size={34}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? (
            <>
              <StandardText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem" onPress={() => navigation.navigate("Login")}>LOGIN</StandardText>
              <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
            </>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigatorScreen")}>
              <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
            </TouchableOpacity>
          )}
        </HeaderRightSide>
      </HeaderContainer>
    )
  );
};

export default Header;



