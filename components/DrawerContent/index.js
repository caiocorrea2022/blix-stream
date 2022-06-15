import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { Container, FooterText, Footer, Text } from './style';
import THEME from '../../config/theme';
import { auth } from '../../services/firebase'
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function DrawerContent(props) {

  const navigation = useNavigation();
  const [login, setLogin] = useState(false);

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("DrawerNavigatorScreen")
    }).catch((error) => {
      // An error happened.
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
          label={() => (<Text>Acesse o e-commerce</Text>)}
          onPress={() => Linking.openURL('https://www.google.com')}
        />
        <DrawerItem
          label={() => (<Text>Fale comigo</Text>)}
          onPress={() => Linking.openURL('https://www.google.com')}
        />
      </DrawerContentScrollView>
      <DrawerItem
        label={() => (<Text>Termos de Uso e Privacidade</Text>)}
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
          label={() => (<Text>Sair</Text>)}
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