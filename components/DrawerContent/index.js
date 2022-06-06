import React from 'react';
import { Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { Container, FooterText, Footer, Text } from './style';
import THEME from '../../config/theme';
import {auth} from '../../services/firebase'
import { signOut } from "firebase/auth";

export default function DrawerContent(props) {
  
  const logout = () =>{
    signOut(auth).then(() => {
        window.location.assign('../Main');
      }).catch((error) => {
        // An error happened.
      });
    }

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
        onPress={() => Linking.openURL('https://dl.airtable.com/.attachments/431cb1fef90c5e6496c37f0b9e41088e/5cae0c6f/TERMOSDEUSOEPRIVACIDADEdelivery.pdf')}
        icon={({ color}) => (
          <Icon
            type="material-community"
            name="file-document-outline"
            color={color}
            size={20}
          />
        )}
      />
      <DrawerItem
        label={() => (<Text>Sair</Text>)}
        icon={({ color}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={20}
            onPress={logout}
          />
        )}
      />
      <Footer>
        <FooterText fontFamily={THEME.FONTFAMILY.REGULAR} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>developed by</FooterText>
        <FooterText fontFamily={THEME.FONTFAMILY.BOLD} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>BLIX</FooterText>
      </Footer>
    </Container>

  )
}