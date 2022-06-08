import React, { useState, useEffect } from 'react';
import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
} from './style';
import { getDocs, collection, where, documentId } from "firebase/firestore";
import { firestore } from '../../services/firebase';
import { TouchableOpacity } from 'react-native';

const CategoryList = ({ categoryId, navigation }) => {

  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    const findAllCategories = async () => {
      const response = await getDocs(collection(firestore, `categories/${categoryId}/cards`));
      let cards = [];
      response.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() });
      });
      setAllCards(cards);
    };

    findAllCategories();
  }, []);

  const CategoryItem = ({ item }) => (
    <CategoryContainer>
      <TouchableOpacity onPress={() => navigation.navigate('ClickClass', { videos: item.videos })}>
        <CategoryImage source={item.img} />
        <CategoryName numberOfLines={1}>{item.title}</CategoryName>
        <CategoryStatus>
          <RedCircle />
        </CategoryStatus>
      </TouchableOpacity>
    </CategoryContainer>
  );

  return (
    <List>
      {allCards.map((item) => (
        <CategoryItem key={item.title} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;