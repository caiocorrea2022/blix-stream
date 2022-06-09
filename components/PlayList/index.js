import React from 'react';
import { Text, View } from "../../components/Themed";
import { Container, Content, Avatar } from './style';

const PlayList = ({ title, image }) => {
    return (
        <View>
            <Container>
                <Avatar resizeMode='cover' source={{ uri: image }} />
                <Content>
                    <Text>{title}</Text>
                </Content>
            </Container>
        </View>
    )
}
export default PlayList;