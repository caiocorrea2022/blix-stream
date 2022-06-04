import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import CategoryList from '../../components/CategoryList';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Wrapper, Container, Poster, Gradient, Content, CategoryText } from './style';
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
  }, []);


  return (
    <Container>
      <Wrapper>
        <Poster source={require('../../assets/foto2.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.7, 1]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.1)',
              '#fff'
            ]}>
            <Header navigation = {navigation}/>
            <Hero />
          </Gradient>
        </Poster>
        <Content>
          <FlatList
            data={allCategories}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View>
                <CategoryText>{item.title}</CategoryText>
                <CategoryList categoryId={item.id} navigation={navigation} onPress={() => navigation.navigate("ClickClass")}></CategoryList>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            // TODO q porra é essa?
            // stickyHeaderIndices={(allCategories.map((el, index) => {return index;})}
            // Refresh Effect
            onRefresh={() => { }}
            refreshing={false}
          />
        </Content>
      </Wrapper>
    </Container>
  );
};