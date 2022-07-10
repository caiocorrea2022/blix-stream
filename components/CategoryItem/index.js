import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, Touchable } from './style';
import THEME from '../../config/theme';
import { Icon } from 'react-native-elements'
import { SmallText } from '../../config/theme/globalStyles';

const CategoryItem = ({ categoryId, item, plan, courses }) => {
    const navigation = useNavigation();
    const onCardPress = () => {
        navigation.navigate('ClickClass', { cardId:item.id, categoryId: categoryId })
    }

    const toDate = (seconds) => {
        const date = new Date(1970, 0 , 1);
        date.setSeconds(seconds);
        return date;
    }

    return (
        <Touchable onPress={onCardPress}>
            <Image source={{ uri: item.img }}>
                {plan >= item.plan || (courses?.length > 0 && courses?.filter(course => course.priceId == item.priceId && toDate(course.dueDate.seconds) > new Date()).length > 0) ?
                    <div></div>
                    :
                    <Icon
                        type="material-community"
                        name="lock"
                        size={THEME.FONTSIZE.BIG}
                        iconStyle={{
                            color: THEME.COLORS.ICON,
                        }}
                        containerStyle={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end", padding: "0.2rem" }}
                    />
                }
            </Image>
            <SmallText fontSize={THEME.FONTSIZE.EXTRASMALL} color={THEME.COLORS.TEXT_MAIN} maxWidth="230px" textAlign="flex-start" numberOfLines={2}>{item.title}</SmallText>
        </Touchable>
    )
}

export default CategoryItem
