import React from 'react';
import { Card, Button } from 'react-native-paper';
import { HorizontalListView, Text, HorizontalList } from './style';
import THEME from '../../config/theme';
import { StandardText } from '../../config/theme/globalStyles';

const CardInfo = ({ array, buttonVisible = true, priceVisible = true, navigation, cardStyle, cardCoverStyle, titleFontFamily, titleFontSize, titleColor, subtitleFontFamily, subtitleFontSize, subtitleColor, subtitleNumberOfLines }) => {

     return (
        <HorizontalListView>
            <HorizontalList horizontal={true}>
                {array.map((item, index) => (
                    <Card key={index} style={cardStyle}>
                        <Card.Cover source={{ uri: item.image }} style={cardCoverStyle} />
                        <Card.Content style={{ height: "40%" }}>
                            <Text fontFamily={titleFontFamily} fontSize={titleFontSize} color={titleColor}>{item.title}</Text>
                            <Text fontFamily={subtitleFontFamily} fontSize={subtitleFontSize} color={subtitleColor} numberOfLines={subtitleNumberOfLines}>{item.info}</Text>
                            {priceVisible ? <StandardText fontFamily={THEME.FONTFAMILY.BOLD} textAlign="flex-start" margin="1rem 0rem">{item.price}</StandardText> : null}
                        </Card.Content>
                        <Card.Actions>
                            {buttonVisible ? <Button onPress={()=>navigation.navigate('ClickCourse', { item })}>Saiba mais</Button> : null}
                        </Card.Actions>
                    </Card>
                ))}
            </HorizontalList>
        </HorizontalListView>
    );
};

export default CardInfo;


