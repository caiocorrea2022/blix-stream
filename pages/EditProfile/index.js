import React, { useContext } from 'React';
import { Text } from 'react-native';
import Header from '../../components/Header';
import {Container} from './style';
// import {AuthContext} from '../../hooks/auth';

export default function EditProfile({ navigation }) {
  // const {user} = useContext(AuthContext)
    return (
      <Container>
        <Header goBack={navigation.goBack}/>
        {/* <Text>Article Screen{user.email}</Text> */}
      </Container>
    );
  }