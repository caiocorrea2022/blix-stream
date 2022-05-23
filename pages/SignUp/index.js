import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SignUpForm from '../../components/Form/SignUpForm';
import { Container, Content, BackButton, BackText } from './style';
import theme from '../../global/theme';
import { Provider } from 'react-native-paper';

export default function SignUp({navigation}){
  return (
    <Provider>
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <SignUpForm />
          <BackButton onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary_900} />
            <BackText>Eu já tenho uma conta</BackText>
          </BackButton>
        </Content>
      </KeyboardAvoidingView>
    </Container>
    </Provider>
  );
}