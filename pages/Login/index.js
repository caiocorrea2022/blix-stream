import * as React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Content, Image, Header, Title} from './style';
import LoginForm from '../../components/Form/LoginForm';
import ResetPassword from '../../components/Form/ResetPassword';
import TouchableText from '../../components/Controllers/TouchableText'
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';


export default function Login({navigation}){
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: "2rem", padding: "1rem"};

  return (
    <Provider>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
            <Header>
              <Image source={require('./../../assets/yoga-logo.jpg')}></Image>
              <Title>YOGA LUZ</Title>
            </Header>
          
            <LoginForm navigation={navigation}/>

            <TouchableText onPress={showModal} title={'RECUPERAR SENHA'}></TouchableText>
            <TouchableText onPress={() => navigation.navigate('Cadastro')} title={'Cadastre-se'}></TouchableText>
          </Content>
          
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <ResetPassword></ResetPassword>
            </Modal>
          </Portal>
        </KeyboardAvoidingView>
      </Container>
    </Provider>
  );
}