import React from 'react';
import { Container, Content } from './style';
import { privacyData } from '../../config/data';
import { SmallText, StandardText } from '../../config/theme/globalStyles';

const Privacy = () => {
    return (
        <Container>
            {privacyData.map((element, index) => (
                <Content>
                    <StandardText>{element.subtitle}</StandardText>
                    {element.paragraphs.map((i) => (
                        <SmallText margin="1rem 0rem 0.5rem 0rem" textAlign="justify">{i.text}</SmallText>
                    ))}
                </Content>
            ))}
        </Container>
    );
};

export default Privacy;