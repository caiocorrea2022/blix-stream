import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../components/Themed';
import CategoryItem from '../CategoryItem';
import {Container} from './style';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from '../../services/firebase';
import THEME from '../../config/theme';

const CategoryList = ({ category }) => {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    const findAllCategories = async () => {
      const response = await getDocs(collection(firestore, `categories/${category.id}/cards`));
      let cards = [];
      response.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() });
      });
      setAllCards(cards);
    };
    findAllCategories();
  }, []);

  return (
    <Container>
      <Text numberOfLines={1} style={{ maxWidth: 230, fontSize: THEME.FONTSIZE.BIG, fontFamily: THEME.FONTFAMILY.BOLD}}>{category.title}</Text>
      <FlatList
        data={allCards}
        renderItem={({ item }) => <CategoryItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

export default CategoryList;