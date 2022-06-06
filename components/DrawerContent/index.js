import React from 'react';
import { Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { Container, Text, Footer } from './style';
import THEME from '../../config/theme';

export default function DrawerContent(props){
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Fale comigo"
          onPress={() => Linking.openURL('https://wa.me/message/M6SALRS5BL3LK1')}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="whatsapp"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Portal Yoga Awake"
          onPress={() => Linking.openURL('https://hotmart.com/product/yoga-awake/E55964817V')}
          icon={({ color, size }) => (
            <Icon
              type="material-icons"
              name="whatshot"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Termos de Uso e Privacidade"
          onPress={() => Linking.openURL('https://dl.airtable.com/.attachments/431cb1fef90c5e6496c37f0b9e41088e/5cae0c6f/TERMOSDEUSOEPRIVACIDADEdelivery.pdf')}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="file-document-outline"
              color={color}
              size={size}
            />
          )}
        />
      </DrawerContentScrollView>
        <DrawerItem
          label="Sair"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={color}
              size={size}
              // onPress={logout}
            />
          )}
        />
      <Footer>
        <Text fontFamily={THEME.FONTFAMILY.REGULAR} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>developed by</Text>
        <Text fontFamily={THEME.FONTFAMILY.BOLD} onPress={() => Linking.openURL('https://www.instagram.com/blix.aplicativos/')}>BLIX</Text>
      </Footer>
    </Container>
  )
}