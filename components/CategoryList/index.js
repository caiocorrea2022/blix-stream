import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import CategoryItem from "../CategoryItem";
import { Container, Content } from "./style";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import THEME from "../../config/theme";
import { Icon } from "react-native-elements";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import { StandardText, Title } from "../../config/theme/globalStyles";

const CategoryList = ({ category, plan, courses }) => {
  const [allCards, setAllCards] = useState([]);
  const [scrollX, setScrollX] = useState(0);

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
    console.log("categorylist", plan);
    findAllCategories();
  }, []);

  const MobileOrDesktopLeftArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <Icon
        type="material-community"
        name="chevron-left"
        size={THEME.FONTSIZE.BIG}
        iconStyle={{
          color: THEME.COLORS.ICON_DRAWER,
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "5px"
        }}
        containerStyle={{
          position: "absolute",
          left: 0,
          zIndex: 99,
          height: "10rem",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onPress={handleLeftArrow}
      />
    );
  };

  const MobileOrDesktopRightArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <Icon
        type="material-community"
        name="chevron-right"
        size={THEME.FONTSIZE.BIG}
        iconStyle={{
          color: THEME.COLORS.ICON_DRAWER,
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "5px"
        }}
        containerStyle={{
          position: "absolute",
          right: 0,
          zIndex: 99,
          height: "10rem",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onPress={handleRightArrow}
      />
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
    let listW = allCards.length * 240;
    if ((window.innerWidth > listW)){
      x = 0;
    } else if (((window.innerWidth - listW) > x)){
      x = (window.innerWidth - listW) - (23 * allCards.length);
    }
    setScrollX(x);
  };

  return (
    <ViewPortProvider>
      <Container>
        <StandardText fontFamily={THEME.FONTFAMILY.BOLD} color={THEME.COLORS.BACKGROUND} maxWidth="230" textAlign="flex-start" numberOfLines={1}>{category.title}</StandardText>
        <Content>
          <MobileOrDesktopLeftArrow></MobileOrDesktopLeftArrow>
          <FlatList
            data={allCards}
            style={{ marginLeft: scrollX }}
            renderItem={({ item }) => (
              <CategoryItem item={item} plan={plan} courses={courses} />
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
