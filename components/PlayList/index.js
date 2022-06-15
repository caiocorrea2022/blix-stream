import React from 'react';
import { StandardText } from '../../config/theme/globalStyles';
import { Container, Content, Avatar } from './style';

const PlayList = ({ title, image }) => {
    return (
        <Container>
            <Avatar resizeMode='cover' source={{ uri: image }} />
            <Content>
                <StandardText textAlign="flex-start">{title}</StandardText>
            </Content>
        </Container>
    )
}
export default PlayList;