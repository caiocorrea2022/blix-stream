import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import CategoryItem from "../CategoryItem";
import { Container, Content } from "./style";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import THEME from "../../config/theme";
import { Icon } from "react-native-elements";
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import { StandardText } from "../../config/theme/globalStyles";

const CategoryList = ({ category, plan, courses }) => {
  const [allCards, setAllCards] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  let cardWidth = 356; //largura card 21rem + padding 1rem

  useEffect(() => {
    const findAllCategories = async () => {
      const response = await getDocs(
        collection(firestore, `categories/${category.id}/cards`)
      );
      let cards = [];
      response.forEach((doc) => {
        cards.push({ id: doc.id, ...doc.data() });
      });
      setAllCards(cards);
    };
    findAllCategories();
  }, []);

  const MobileOrDesktopLeftArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <>
        {window.innerWidth < allCards.length * cardWidth ? (
          <TouchableOpacity onPress={handleLeftArrow} style={{ zIndex: 99 }}>
            <Icon
              type="material-community"
              name="chevron-left"
              size="30px"
              iconStyle={{
                color: THEME.COLORS.ICON,
              }}
              containerStyle={{
                position: "absolute",
                left: 0,
                zIndex: 99,
                height: "11.8rem",
                //aprox altura do card
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "5px",
                cursor: "pointer",
                width:"1.5rem"
              }}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </>
    );
  };

  const MobileOrDesktopRightArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <>
        {window.innerWidth < allCards.length * cardWidth ? (
          <TouchableOpacity onPress={handleRightArrow} style={{ zIndex: 99 }}>
            <Icon
              type="material-community"
              name="chevron-right"
              size="30px"
              iconStyle={{
                color: THEME.COLORS.ICON,
              }}
              containerStyle={{
                position: "absolute",
                right: 0,
                zIndex: 99,
                height: "11.8rem",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.1)",
                cursor: "pointer",
                width: "1.5rem"
              }}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </>
    );
  };

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = allCards.length * cardWidth;
    if (window.innerWidth > listW) {
      x = 0;
    } else if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - allCards.length;
    }
    setScrollX(x);
  };

  return (
    <ViewPortProvider>
      <Container>
        <StandardText
          fontFamily={THEME.FONTFAMILY.BOLD}
          color={THEME.COLORS.TEXT_MAIN}
          textAlign="flex-start"
          numberOfLines={1}
          margin="0rem 0rem 1rem 1.5rem"
        >
          {category.title}
        </StandardText>
        <Content>
          <MobileOrDesktopLeftArrow></MobileOrDesktopLeftArrow>
          <FlatList
            data={allCards}
            style={{ marginLeft: scrollX , paddingLeft:"1.5rem"}}
            renderItem={({ item }) => (
              <CategoryItem
                categoryId={category.id}
                item={item}
                plan={plan}
                courses={courses}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <MobileOrDesktopRightArrow></MobileOrDesktopRightArrow>
        </Content>
      </Container>
    </ViewPortProvider>
  );
};

export default CategoryList;
