import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Image,
} from './style';
import { Text } from '../../components/Themed';
import THEME from '../../config/theme';
import { Icon } from 'react-native-elements'

const CategoryItem = ({ item, plan, courses }) => {
    const navigation = useNavigation();

    const onCardPress = () => {
        console.log('item',item);
        console.log(plan)
        console.log(courses)
        // navigation.navigate('ClickClass', { videos: item.videos, name: item.title, description: item.description, pdf: item.pdf, url: item.url })
    }

    return (
        <Container onPress={onCardPress}>
            <Image source={{ uri: item.img }}>
            {plan === item.plan || courses?.includes(item.courseId) ? 
                <div></div>     
                :
                <Icon
                  type="material-community"
                  name="lock"
                  size={24}
                  iconStyle={{
                      color: THEME.COLORS.TEXT_000,
                  }}
                  containerStyle={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end", padding: "0.2rem" }}
              />
                }
            </Image>
            <Text numberOfLines={2} style={{ maxWidth: 230, fontSize: THEME.FONTSIZE.MEDIUM, fontFamily: THEME.FONTFAMILY.MEDIUM }}>{item.title}</Text>
        </Container>
    )
}

export default CategoryItem
