import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, Touchable } from './style';
import THEME from '../../config/theme';
import { Icon } from 'react-native-elements'
import { SmallText } from '../../config/theme/globalStyles';

const CategoryItem = ({ item, plan, courses }) => {
    const navigation = useNavigation();
    const onCardPress = () => {
        navigation.navigate('ClickClass', { cardId:item.id })
    }

    return (
        <Touchable onPress={onCardPress}>
            <Image source={{ uri: item.img }}>
                {plan >= item.plan || courses?.includes(item.priceId) ?
                    <div></div>
                    :
                    <Icon
                        type="material-community"
                        name="lock"
                        size={THEME.FONTSIZE.BIG}
                        iconStyle={{
                            color: THEME.COLORS.ICON_HEADER_OVERPHOTO,
                        }}
                        containerStyle={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end", padding: "0.2rem" }}
                    />
                }
            </Image>
            <SmallText color={THEME.COLORS.TEXT_MAIN} maxWidth="230" textAlign="flex-start" numberOfLines={1}>{item.title}</SmallText>
        </Touchable>
    )
}

export default CategoryItem
