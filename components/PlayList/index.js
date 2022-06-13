import React from 'react';
import { Container, Content, Avatar, Text} from './style';

const PlayList = ({ title, image }) => {
    return (
        <Container>
            <Avatar resizeMode='cover' source={{ uri: image }} />
            <Content>
                <Text>{title}</Text>
            </Content>
        </Container>
    )
}
export default PlayList;