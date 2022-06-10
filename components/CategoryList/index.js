import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../components/Themed';
import CategoryItem from '../CategoryItem';
import { Container, Content } from './style';
import { getDocs, collection } from "firebase/firestore";
import { firestore } from '../../services/firebase';
import THEME from '../../config/theme';
import { Icon } from 'react-native-elements'

const CategoryList = ({ category }) => {
  const [allCards, setAllCards] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    // let listW = allCards.length * 160; //230 eh o tamanho de cada card
    // if ((window.innerWidth - listW) > x) {
    //   x = (window.innerWidth - listW);
    // }
    setScrollX(x);
  }


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
      <Text numberOfLines={1} style={{ maxWidth: 230, fontSize: THEME.FONTSIZE.MEDIUM, fontFamily: THEME.FONTFAMILY.BOLD }}>{category.title}</Text>
      <Content>
        <Icon
          type="material-community"
          name="chevron-left"
          size={24}
          iconStyle={{
            color: THEME.COLORS.TEXT_000,
          }}
          containerStyle={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.7)", left: 0, zIndex: 99, height: "10rem", flex: 1, justifyContent: "center", overflow: "hidden" }}
          onPress={handleLeftArrow}
        />
        <FlatList
          data={allCards}
          style={{ marginLeft: scrollX }}
          renderItem={({ item }) => <CategoryItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Icon
          type="material-community"
          name="chevron-right"
          size={24}
          iconStyle={{
            color: THEME.COLORS.TEXT_000,
          }}
          containerStyle={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.7)", right: 0, zIndex: 99, height: "10rem", flex: 1, justifyContent: "center", overflow: "hidden" }}
          onPress={handleRightArrow}
        />
      </Content>
    </Container>
  );
}

export default CategoryList;