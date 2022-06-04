import React, {useState, useEffect} from 'react';
import { FlatList, View } from 'react-native';
import CategoryList from '../../components/CategoryList';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Wrapper, Container, Poster, Gradient, Main, CategoryText } from './style';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from '../../services/firebase';

const Main = ({navigation}) => {

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
  const findAllCategories = async () => {
    const response = await getDocs(collection(firestore, "categories"));
    let categories = [];
    response.forEach((doc) => {categories.push({id: doc.id, ...doc.data()});});
    setAllCategories(categories);
  };
  
  findAllCategories();
  }, []);


  return (
    <Wrapper>
      <Container>
        <Poster source={require('../../assets/foto2.jpg')}>
            <Gradient
              locations={[0, 0.2, 0.7, 1]}
              colors={[
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.1)',
                '#fff'
              ]}>
              <Header/>
              <Hero/>
            </Gradient>
          </Poster>
        <Main>
          <FlatList
            data={allCategories}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View>
                <CategoryText>{item.title}</CategoryText>
                <CategoryList categoryId={item.id} navigation={navigation}></CategoryList>
              </View>
              )}
            keyExtractor={(item,index)=>index.toString()}
            // TODO q porra é essa?
            // stickyHeaderIndices={(allCategories.map((el, index) => {return index;})}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Main;