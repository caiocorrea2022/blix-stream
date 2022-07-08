import React, { useState } from "react";
import { Card } from "react-native-paper";
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
import ViewPortProvider from "../../hooks/ViewPortProvider";
import useViewport from "../../hooks/useViewport";
import Button from "../Button";

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
              color: THEME.COLORS.ICON,
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
              color: THEME.COLORS.ICON,
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
    if ((window.innerWidth > listW)) {
      x = 0;
    } else if (((window.innerWidth - listW) > x)) {
      x = (window.innerWidth - listW) - (34 * array.length);
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
                    margin="0rem 0rem 0.4rem 0rem"
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
                    {item.infos}
                  </SmallText>
                </ViewSmallTextCategory>
                {priceVisible ? (
                  <ViewPrice>
                    <StandardText
                      fontFamily={THEME.FONTFAMILY.BOLD}
                      textAlign="flex-start"
                      margin="0.4rem 0rem 0rem 0rem"
                    >
                      {item.price}
                    </StandardText>
                  </ViewPrice>) : null}
              </Card.Content>
              <Card.Actions>
                {buttonVisible ? (
                  <Button
                    title={"Saiba mais"}
                    width="100%"
                    borderRadius="5px"
                    colorbutton={THEME.COLORS.SECONDARY_900}
                    onPress={() => navigation.navigate("ClickCourse", { courseId: item.id })}
                  ></Button>
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
