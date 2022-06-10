import React from 'react';
import { Card, Button } from 'react-native-paper';
import { HorizontalListView, Text, HorizontalList } from './style';
import THEME from '../../config/theme';

const CardInfo = ({ array, buttonVisible = true, priceVisible = true, navigation }) => {
    const onCardPress = () => {
        navigation.navigate('Login', console.log(array))
    }
    return (
        <HorizontalListView>
            <HorizontalList horizontal={true}>
                {array.map((item, index) => (
                    <Card key={index} style={{ width: "20rem", margin: "1rem" }}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content style={{ height: "50%" }}>
                            <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.SMALL} color={THEME.COLORS.TEXT_900}>{item.title}</Text>
                            <Text fontFamily={THEME.FONTFAMILY.REGULAR} fontSize={THEME.FONTSIZE.EXTRASMALL} color={THEME.COLORS.TEXT_800}>{item.info}</Text>
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


