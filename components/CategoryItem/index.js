import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Image,
} from './style';
import { Text } from '../../components/Themed';
import THEME from '../../config/theme';
import { Icon } from 'react-native-elements'

const CategoryItem = ({ item }) => {
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('ClickClass', { videos: item.videos })
    }

    return (
        <Container onPress={onCardPress}>
            <Image source={{ uri: item.img }}>
                <Icon
                    type="material-community"
                    name="lock"
                    size={24}
                    iconStyle={{
                        color:THEME.COLORS.TEXT_000,
                    }}
                    containerStyle={{flex:1, alignSelf: "flex-end", justifyContent: "flex-end", padding: "0.1rem"}}
                    onPress={() => navigation.toggleDrawer()}
                />
            </Image>

            <Text numberOfLines={1} style={{ maxWidth: 230, fontSize: THEME.FONTSIZE.MEDIUM, fontFamily: THEME.FONTFAMILY.MEDIUM }}>{item.title}</Text>
        </Container>
    )
}

export default CategoryItem
