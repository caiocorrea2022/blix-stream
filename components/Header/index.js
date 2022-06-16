import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';
import { StandardText } from "../../config/theme/globalStyles";

const Header = ({ login, goBack, navigation, about, background }) => {
  const jumpToAction = DrawerActions.jumpTo('Aulas');

  return (
    login ? (
      <HeaderContainer background={background}>
        <HeaderLeftSide>
          {goBack ? (
            <Icon
              type="material-community"
              name="arrow-left-circle"
              color={THEME.COLORS.PRIMARY_900}
              size={32}
              onPress={goBack}
            />
          ) : (
            <Icon
              type="material-community"
              name="menu"
              color={THEME.COLORS.ICON_HEADER}
              size={32}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? (
            <>
              <StandardText margin="0rem 1rem" onPress={() => navigation.dispatch(jumpToAction)}>ACESSAR AULAS</StandardText>
              <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
            </>
          ) : (
            <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
          )}
        </HeaderRightSide>
      </HeaderContainer>
    ) : (
      <HeaderContainer background={background}>
        <HeaderLeftSide>
          {goBack ? (
            <Icon
              type="material-community"
              name="arrow-left-circle"
              color={THEME.COLORS.PRIMARY_900}
              size={32}
              onPress={goBack}
            />
          ) : (
            <Icon
              type="material-community"
              name="menu"
              color={THEME.COLORS.ICON_HEADER}
              size={32}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? (
            <>
              <StandardText margin="0rem 1rem" onPress={() => navigation.navigate("Login")}>LOGIN</StandardText>
              <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
            </>
          ) : (
            <Avatar resizeMode="contain" source={require("../../assets/Logo.jpg")} />
          )}
        </HeaderRightSide>
      </HeaderContainer>
    )
  );
};

export default Header;



