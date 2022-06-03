import React from 'react';
import { Container, Title } from './style';

const TouchableText = ({ title, icon, ...rest }) => {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}

export default TouchableText