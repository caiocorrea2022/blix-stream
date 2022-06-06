import React from 'React';
import { Text } from 'react-native';
import Header from '../../components/Header';
import {Container} from './style';


export default function About({ navigation }) {
    return (
      <Container>
        <Header goBack={navigation.goBack}/>
        <Text>Article Screen</Text>
      </Container>
    );
  }