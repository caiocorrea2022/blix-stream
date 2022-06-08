import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../components/Themed';
import CategoryItem from '../CategoryItem';
import styles from './style';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from '../../services/firebase';

const CategoryList = (props) => {
    const { category, navigation } = props;

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
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={allCards}
                renderItem={({item}) => <CategoryItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

export default CategoryList;