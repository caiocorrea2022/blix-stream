import React from 'react';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';
import { Container, Text } from './style';
import THEME from '../../config/theme';

const CardInfo = ({ item }) => {
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('ClickLive', { name: item.title, info: item.info, price: item.price})
    }

    return (
        <Container>
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.MEDIUM} color={THEME.COLORS.TEXT_900}>Nome do Plano</Text>
                    <Text fontFamily={THEME.FONTFAMILY.REGULAR} fontSize={THEME.FONTSIZE.SMALL} color={THEME.COLORS.TEXT_800} >Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit deserunt in officia libero eos officiis consequatur 33 velit repudiandae et atque praesentium.</Text>
                    <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.MEDIUM} color={THEME.COLORS.TEXT_900}>R$ 100,00</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        title={'Saiba mais >'}
                        colorbutton={THEME.COLORS.PRIMARY_900}
                        colortitle={THEME.COLORS.TEXT_000}
                        onPress={onCardPress}
                    ></Button>
                </Card.Actions>
            </Card>
        </Container>
    );
};

export default CardInfo;


