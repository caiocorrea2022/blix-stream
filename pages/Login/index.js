import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Content, Image, Header, Title} from './style';
import LoginForm from '../../components/Form/LoginForm';

export default function Login({navigation}){
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Content>
          <Header>
            <Image source={require('./../../assets/yoga-logo.jpg')}></Image>
            <Title>YOGA LUZ</Title>
          </Header>
        
          <LoginForm navigation={navigation}/>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}