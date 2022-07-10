import * as React from 'react';
import { Button as PaperButton, Paragraph, Dialog, Portal } from 'react-native-paper';
import THEME from '../../config/theme';

export function AlertBox (props) {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={() => props.onClose(false)} style={{ width: Math.round(window.innerWidth * 0.7), alignSelf:"center"}}>
        <Dialog.Title style={{fontFamily:THEME.FONTFAMILY.BOLD, fontSize:THEME.FONTSIZE.BIG}}>{props.title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph style={{fontFamily:THEME.FONTFAMILY.REGULAR, fontSize:THEME.FONTSIZE.MEDIUM, lineHeight:"1.5"}}>{props.message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <PaperButton labelStyle={{color:THEME.COLORS.PRIMARY_900, fontFamily:THEME.FONTFAMILY.REGULAR, fontSize:THEME.FONTSIZE.BIG}} onPress={() => props.onClose(false)}>OK</PaperButton>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}