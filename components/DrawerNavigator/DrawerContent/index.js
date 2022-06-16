import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { Footer } from './style';
import THEME from '../../../config/theme';
import { auth } from '../../../services/firebase'
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { SmallText, FooterText, Container } from '../../../config/theme/globalStyles';

export default function DrawerContent(props) {
  const navigation = useNavigation();
  const [login, setLogin] = useState(false);

  const logout = () => {
    signOut(auth).then(() => {
      window.location.reload()
    }).catch((error) => {
      console.log('deu erro', error)
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user)
      if (user) {
        setLogin(true);
      }
    });
  }, []);

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => (<SmallText textAlign="flex-start">Acesse o e-commerce</SmallText>)}
          onPress={() => Linking.openURL('https://www.google.com')}
        />
        <DrawerItem
          label={() => (<SmallText textAlign="flex-start">Fale comigo</SmallText>)}
          onPress={() => Linking.openURL('https://www.google.com')}
        />
      </DrawerContentScrollView>
      <DrawerItem
        label={() => (<SmallText textAlign="flex-start">Termos de Uso e Privacidade</SmallText>)}
        onPress={() => navigation.navigate("TermsofUse")}
        icon={({ color }) => (
          <Icon
            type="material-community"
            name="file-document-outline"
            color={color}
            size={20}
          />
        )}
      />
      {login ?
        <DrawerItem
          label={() => (<SmallText textAlign="flex-start" onPress={logout}>Sair</SmallText>)}
          icon={({ color }) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={color}
              size={20}
              onPress={logout}
            />
          )}
        />
        :
        <></>
      }
      <Footer>
        <FooterText fontFamily={THEME.FONTFAMILY.REGULAR} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>developed by</FooterText>
        <FooterText fontFamily={THEME.FONTFAMILY.BOLD} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>BLIX</FooterText>
      </Footer>
    </Container>

  )
}