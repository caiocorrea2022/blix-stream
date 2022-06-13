import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Image,
    Text
} from './style';
import THEME from '../../config/theme';
import { Icon } from 'react-native-elements'

const CategoryItem = ({ item }) => {
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('ClickClass', { videos: item.videos, name: item.title, description: item.description, pdf: item.pdf, url: item.url })
    }

    return (
        <Container onPress={onCardPress}>
            <Image source={{ uri: item.img }}>
                <Icon
                    type="material-community"
                    name="lock"
                    size={24}
                    iconStyle={{
                        color: THEME.COLORS.TEXT_000,
                    }}
                    containerStyle={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end", padding: "0.2rem" }}
                />
            </Image>
            <Text numberOfLines={2}>{item.title}</Text>
        </Container>
    )
}

export default CategoryItem
