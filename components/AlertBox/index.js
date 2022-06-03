import * as React from 'react';
import { Button as PaperButton, Paragraph, Dialog, Portal } from 'react-native-paper';

const AlertBox = (props) => {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={() => props.onClose(false)}>
        <Dialog.Title>{props.title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{props.message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <PaperButton onPress={() => props.onClose(false)}>OK</PaperButton>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default AlertBox