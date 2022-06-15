import React from 'react';
import { Card, Button } from 'react-native-paper';
import { HorizontalListView, Text, HorizontalList } from './style';
import THEME from '../../config/theme';
import {View} from 'react-native'

const CardInfo = ({ array, buttonVisible = true, priceVisible = true, navigation, cardStyle, cardCoverStyle, titleFontFamily, titleFontSize, titleColor, subtitleFontFamily, subtitleFontSize, subtitleColor, subtitleNumberOfLines }) => {

    // const onCardPress = () => {
    //     navigation.navigate('ClickCourse', { videos: item.videos, title: array.title, description: array.info, price: array.price })
    // }
    const onCardPress = (num) => {
        console.log(num)
    }
    return (
        <HorizontalListView>
            <HorizontalList horizontal={true}>
                {array.map((item, index) => (
                    <Card key={index} style={cardStyle}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={cardCoverStyle} />
                        <Card.Content>
                            <Text fontFamily={titleFontFamily} fontSize={titleFontSize} color={titleColor}>{item.title}</Text>
                            <Text fontFamily={subtitleFontFamily} fontSize={subtitleFontSize} color={subtitleColor} numberOfLines={subtitleNumberOfLines}>{item.info}</Text>
                            {priceVisible ? <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.MEDIUM} color={THEME.COLORS.TEXT_900}>{item.price}</Text> : null}
                        </Card.Content>
                        <Card.Actions>
                            {buttonVisible ? <Button onPress={onCardPress}>Saiba mais</Button> : null}
                        </Card.Actions>
                    </Card>
                ))}
            </HorizontalList>
        </HorizontalListView>
    );
};

export default CardInfo;


