import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { Footer, Logo } from './style';
import THEME from '../../config/theme';
import { faleComigoUrl } from '../../config/data'
import { auth } from '../../services/firebase'
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/useAuth";
import { SmallText, FooterText, Container } from '../../config/theme/globalStyles';

export function DrawerContent(props) {
  const { user } = useAuth();

  const logout = () => {
    signOut(auth).then(() => {
      window.location.assign('../About');
    }).catch((error) => {
      console.log('deu erro', error)
    });
  }

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => (<SmallText color={THEME.COLORS.SECONDARY_900} textAlign="flex-start">Fale comigo</SmallText>)}
          onPress={() => Linking.openURL(faleComigoUrl)}
        />
      </DrawerContentScrollView>
      {user ?
        <DrawerItem
          label={() => (
            <SmallText color={THEME.COLORS.TERTIARY_900} textAlign="flex-start" onPress={logout}>Sair</SmallText>
          )}
          icon={({ size }) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={THEME.COLORS.TERTIARY_900}
              size={size}
              onPress={logout}
            />
          )}
        />
        :
        <></>
      }
      <Footer>
        <FooterText margin="0rem 0.5rem">Desenvolvido com ♥ por</FooterText>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/blix.aplicativos/")}>
          <Logo source={require("./../../assets/blix-color.svg")} ></Logo>
        </TouchableOpacity>
        <FooterText fontFamily={THEME.FONTFAMILY.BOLD} margin="0rem 0.5rem" onPress={() => Linking.openURL("https://www.instagram.com/blix.aplicativos/")}>BLIX</FooterText>
      </Footer>
    </Container>

  )
}