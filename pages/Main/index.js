import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View } from '../../components/Themed';
import styles from './style';
import CategoryList from '../../components/CategoryList';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from '../../services/firebase';


const Main = () => {
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
    <View style={styles.container}>
        {/* List of categories */}
        <FlatList
            data={allCategories}
            renderItem={({item}) => <CategoryList category={item} />}
        />
    </View>
  );
}

export default Main;