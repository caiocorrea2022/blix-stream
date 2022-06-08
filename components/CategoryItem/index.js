import React from 'react'
import { Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Text } from '../../components/Themed';

const CategoryItem = ({ item }) => {
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('ClickClass', { videos: item.videos })
    }

    return (
        <Pressable onPress={onCardPress}>
            <Image style={styles.image} source={{ uri: item.img }} />
            <Text>{item.title}</Text>
        </Pressable>
    )
}

export default CategoryItem
