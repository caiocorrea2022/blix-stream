import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import THEME from "../../config/theme";
import { HeaderContainer } from "../../config/theme/globalStyles";
import { StandardText } from "../../config/theme/globalStyles";
import { useNavigation } from "@react-navigation/native";

const HeaderHome = ({ login }) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <HeaderLeftSide>
        <Avatar
          resizeMode="contain"
          source={require("../../assets/Logo.jpg")}
        />
      </HeaderLeftSide>

      {/* <HeaderRightSide>
        {login ? (
          <StandardText
            color={THEME.COLORS.ICON_HEADER_OVERPHOTO}
            margin="0rem 1rem"
            onPress={() => navigation.navigate("Drawer")}
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
      </HeaderRightSide> */}
    </HeaderContainer>
  );
};

export default HeaderHome;
