import React from 'react';
import { StandardText } from '../../config/theme/globalStyles';
import { Container, Content, Avatar } from './style';
import THEME from "../../config/theme";

const PlayList = ({ title, image }) => {
    return (
        <Container>
            <Avatar resizeMode='cover' source={{ uri: image }} />
            <Content>
                <StandardText color={THEME.COLORS.TEXT_MAIN} textAlign="flex-start">{title}</StandardText>
            </Content>
        </Container>
    )
}
export default PlayList;