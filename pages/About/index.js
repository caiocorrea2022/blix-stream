import React from 'React';
import Header from '../../components/Header';
import {Container, HorizontalList, Title} from './style';
import {
  coursesInfo,
} from "../../config/data";
import CardInfo from '../../components/Card';

export default function About({ navigation }) {
    return (
      <Container>
        <Header goBack={navigation.goBack}/>
        <Title>CURSOS</Title>
        <CardInfo></CardInfo>
        {/* <HorizontalList horizontal={true}>
          {coursesInfo.map((item, index) => (
            <CardInfo item={item}/>
          ))}
        </HorizontalList> */}
      </Container>
    );
  }