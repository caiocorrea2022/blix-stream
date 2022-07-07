import React from 'react';
import { Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { Footer } from './style';
import THEME from '../../config/theme';
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
          label={() => (<SmallText textAlign="flex-start">Fale comigo</SmallText>)}
          onPress={() => Linking.openURL('https://www.google.com')}
        />
      </DrawerContentScrollView>
      {user ?
        <DrawerItem
          label={() => (
            <SmallText textAlign="flex-start" onPress={logout}>Sair</SmallText>
          )}
          icon={({ size }) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={THEME.COLORS.ICON_DRAWER}
              size={size}
              onPress={logout}
            />
          )}
        />
        :
        <></>
      }
      <Footer>
        <FooterText fontFamily={THEME.FONTFAMILY.REGULAR} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>Desenvolvido com ♥ por</FooterText>
        <FooterText margin="0rem 0.3rem" fontFamily={THEME.FONTFAMILY.BOLD} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>BLIX</FooterText>
      </Footer>
    </Container>

  )
}