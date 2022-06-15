import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Text } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { auth } from "../../services/firebase";
import { HeaderContainer } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';

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
              color={THEME.COLORS.TEXT_900}
              size={32}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ? 
          <>
            <Text onPress={() => navigation.dispatch(jumpToAction)}>MINHAS AULAS</Text>
            <Avatar
              resizeMode="contain"
              source={require("../../assets/logo.png")}
            />
          </>
            :
            <Avatar
              resizeMode="contain"
              source={require("../../assets/logo.png")}
            />
          }
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
              color={THEME.COLORS.TEXT_000}
              size={32}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        </HeaderLeftSide>

        <HeaderRightSide>
          {about ?
            <>
              <Text onPress={() => navigation.navigate("Login")}>LOGIN</Text>
              <Avatar
                resizeMode="contain"
                source={require("../../assets/logo.png")} 
              />
            </>
            :
            <Avatar
              resizeMode="contain"
              source={require("../../assets/logo.png")}
            />
          }
        </HeaderRightSide>
      </HeaderContainer>
    )
  );
};

export default Header;



