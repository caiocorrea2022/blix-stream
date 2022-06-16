import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';
import { StandardText } from "../../config/theme/globalStyles";
import TouchableText from '../../components/TouchableText'

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
              size={28}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? (
            <>
              <StandardText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem" onPress={() => navigation.dispatch(jumpToAction)}>ACESSAR AULAS</StandardText>
              <Avatar resizeMode="contain" source={require("../../assets/logo.png")} />
            </>
          ) : (
            <Avatar resizeMode="contain" source={require("../../assets/logo.png")} />
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
              size={28}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? (
            <>
              <StandardText color={THEME.COLORS.ICON_HEADER} margin="0rem 1rem" onPress={() => navigation.navigate("Login")}>LOGIN</StandardText>
              <Avatar resizeMode="contain" source={require("../../assets/logo.png")} />
            </>
          ) : (
            <Avatar resizeMode="contain" source={require("../../assets/logo.png")} />
          )}
        </HeaderRightSide>
      </HeaderContainer>
    )
  );
};

export default Header;



