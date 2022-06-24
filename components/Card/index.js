import React, { useState } from "react";
import { Card, Button } from "react-native-paper";
import {
  HorizontalListView,
  HorizontalList,
  ViewTitleCategory,
  ViewSmallTextCategory,
  ViewPrice,
} from "./style";
import THEME from "../../config/theme";
import {
  SmallText,
  StandardText,
  Title,
} from "../../config/theme/globalStyles";
import { Icon } from "react-native-elements";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
// import { useNavigation } from "@react-navigation/native";

const CardInfo = ({
  array,
  navigation,
  buttonVisible = true,
  priceVisible = true,
  cardStyle,
  cardCoverStyle,
  cardContentStyle,
  titleFontSize,
  titleColor,
  subtitleNumberOfLines,
  cardWidth,
}) => {
  // const navigation = useNavigation();
  const [scrollX, setScrollX] = useState(0);
  const MobileOrDesktopLeftArrow = () => {
    const { width } = useViewport();
    const breakpoint = 1080;
    return width < breakpoint ? (
      <></>
    ) : (
      <>
        {window.innerWidth < (array.length * cardWidth) ? (
          <Icon
            type="material-community"
            name="chevron-left"
            size={THEME.FONTSIZE.BIG}
            iconStyle={{
              color: THEME.COLORS.ICON_DRAWER,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: "5px",
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
        {window.innerWidth < (array.length * cardWidth) ? (
          <Icon
            type="material-community"
            name="chevron-right"
            size={THEME.FONTSIZE.BIG}
            iconStyle={{
              color: THEME.COLORS.ICON_DRAWER,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: "5px",
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
    let listW = array.length * cardWidth;
    if (window.innerWidth > listW) {
      x = 0;
    } else if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 36 * array.length;
    }
    setScrollX(x);
  };

  return (
    <ViewPortProvider>
      <HorizontalListView>
        <MobileOrDesktopLeftArrow></MobileOrDesktopLeftArrow>
        <HorizontalList horizontal={true} style={{ marginLeft: scrollX }}>
          {array.map((item, index) => (
            <Card key={index} style={cardStyle}>
              <Card.Cover source={{ uri: item.image }} style={cardCoverStyle} />
                <Card.Content style={cardContentStyle}>
                  <ViewTitleCategory>
                    <Title
                      textAlign="flex-start"
                      fontSize={titleFontSize}
                      color={titleColor}
                      numberOfLines={1}
                    >
                      {item.title}
                    </Title>
                  </ViewTitleCategory>
                  <ViewSmallTextCategory>
                    <SmallText
                      textAlign="flex-start"
                      fontSize={THEME.FONTSIZE.EXTRASMALL}
                      numberOfLines={subtitleNumberOfLines}
                    >
                      {item.info}
                    </SmallText>
                  </ViewSmallTextCategory>
                  {priceVisible ? (
                  <ViewPrice>
                    <StandardText
                      fontFamily={THEME.FONTFAMILY.BOLD}
                      textAlign="flex-start"
                    >
                      {item.price}
                    </StandardText>
                  </ViewPrice> ) : null }
                </Card.Content>
              <Card.Actions>
                {buttonVisible ? (
                  <Button
                    labelStyle={{ color: THEME.COLORS.TEXT_BUTTON }}
                    style={{
                      width: "100%",
                      backgroundColor: THEME.COLORS.PRIMARY_900,
                    }}
                    onPress={() => navigation.navigate("ClickCourse", { title:item.title, info: item.info, image:item.image, price:item.price, priceId:item.priceId })}
                  >
                    Saiba mais
                  </Button>
                ) : null}
              </Card.Actions>
            </Card>
          ))}
        </HorizontalList>
        <MobileOrDesktopRightArrow></MobileOrDesktopRightArrow>
      </HorizontalListView>
    </ViewPortProvider>
  );
};

export default CardInfo;
