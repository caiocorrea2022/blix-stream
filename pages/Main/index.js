import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View } from '../../components/Themed';
import { Container, Poster, Gradient, Content } from './style';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import CategoryList from '../../components/CategoryList';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from '../../services/firebase';


export default function Main({ navigation }) {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const findAllCategories = async () => {
      const response = await getDocs(collection(firestore, "categories"));
      let categories = [];
      response.forEach((doc) => { categories.push({ id: doc.id, ...doc.data() }); });
      setAllCategories(categories);

    };

    findAllCategories();
    console.log(allCategories);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Poster source={require('../../assets/foto2.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.7, 1]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,1)',
            ]}>
            <Header navigation={navigation} />
            <Hero />
          </Gradient>
        </Poster>
        <Content>
          <FlatList
            data={allCategories}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CategoryList category={item} />}
          />
        </Content>
      </Container>
    </View>
  );
}