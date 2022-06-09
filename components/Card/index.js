import React from 'react';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';
import { HorizontalListView, Text, HorizontalList } from './style';
import THEME from '../../config/theme';
import { coursesInfo } from '../../config/data';

const CardInfo = ({ item }) => {
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('Login', { name: item.title, info: item.info, price: item.price })
    }

    return (
        <HorizontalListView>
            <HorizontalList horizontal={true}>
                {coursesInfo.map((item, index) => (
                    <Card key={index} style={{ width: "20rem", margin: "1rem", backgroundColor:"red", justifyContent:"space-evenly"}}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content>
                            <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.SMALL} color={THEME.COLORS.TEXT_900}>{item.title}</Text>
                            <Text fontFamily={THEME.FONTFAMILY.REGULAR} fontSize={THEME.FONTSIZE.EXTRASMALL} color={THEME.COLORS.TEXT_800} >{item.info}</Text>
                            <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.MEDIUM} color={THEME.COLORS.TEXT_900}>{item.price}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button
                                title={'Saiba mais >'}
                                colorbutton={THEME.COLORS.PRIMARY_900}
                                colortitle={THEME.COLORS.TEXT_000}
                            // onPress={onCardPress}
                            ></Button>
                        </Card.Actions>
                    </Card>
                ))}
            </HorizontalList>
        </HorizontalListView>
    );
};

export default CardInfo;


