import React, { useState } from 'react';
import { Card, Button } from 'react-native-paper';
import { HorizontalListView, HorizontalList } from './style';
import THEME from '../../config/theme';
import { SmallText, StandardText, Title } from '../../config/theme/globalStyles';
import { Icon } from 'react-native-elements';
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";

const CardInfo = ({ array, buttonVisible = true, priceVisible = true, navigation, cardStyle, cardCoverStyle, cardContentStyle, titleFontSize, titleColor, subtitleNumberOfLines }) => {
    const [scrollX, setScrollX] = useState(0);

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
        let listW = array.length * 192;
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
                                <Title textAlign="flex-start" padding="0.3rem 0rem" fontSize={titleFontSize} color={titleColor}>{item.title}</Title>
                                <SmallText textAlign="flex-start" padding="0.3rem 0rem" fontSize={THEME.FONTSIZE.EXTRASMALL} numberOfLines={subtitleNumberOfLines}>{item.info}</SmallText>
                                {priceVisible ? <StandardText fontFamily={THEME.FONTFAMILY.BOLD} textAlign="flex-start" margin="1rem 0rem">{item.price}</StandardText> : null}
                            </Card.Content>
                            <Card.Actions>
                                {buttonVisible ? <Button onPress={() => navigation.navigate('ClickCourse', { item })}>Saiba mais</Button> : null}
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


