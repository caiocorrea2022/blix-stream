import React from "react";
import { HeaderLeftSide, HeaderRightSide, Avatar, Row } from "./style";
import { Icon } from "react-native-elements";
import THEME from "../../config/theme";
import { HeaderContainer } from "../../config/theme/globalStyles";
import { DrawerActions } from '@react-navigation/native';
import { StandardText } from "../../config/theme/globalStyles";
import TouchableText from '../../components/TouchableText'
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ goBack }) => {
  const navigation = useNavigation();

  return (
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
  );
};

export default Header;



