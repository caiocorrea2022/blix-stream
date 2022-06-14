import React from "react";
import { Container, HeaderLeftSide, HeaderIcons, Avatar, Text } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { auth } from "../../services/firebase";

const Header = ({ login, goBack, navigation, main, about }) => {
  return (
      login? (
    <Container>
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
      <HeaderIcons>
          { main ? (
                  <Avatar
                  resizeMode="contain"
                  source={require("../../assets/logo.png")}
                />
          )
            :
            about? <Text onPress={() => navigation.navigate("Main")}>MINHAS AULAS</Text> : <></>
            }
        <Avatar
          resizeMode="contain"
          source={require("../../assets/logo.png")}
        />
      </HeaderIcons>
    </Container>
      ):
      (
        <Container>
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
        <HeaderIcons>
            { main ? (
                    <></>
            )
              :
              about? <Text onPress={() => navigation.navigate("Login")}>LOGIN</Text> : <></>
            }
          <Avatar
            resizeMode="contain"
            source={require("../../assets/logo.png")}
          />
        </HeaderIcons>
      </Container>
      )
  );
};

export default Header;



