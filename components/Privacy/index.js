import React from 'react';
import {View} from "react-native"
import {  TextWrapper, InfoName, InfoText } from './style';
import { privacyData } from '../../config/data';

const Privacy = () => {
    return (
            <TextWrapper>
                {privacyData.map((element, index) => (
                    <View>
                        <InfoName>{element.subtitle}</InfoName>
                        {element.paragraphs.map((i) => (
                            <InfoText>
                                {i.text}
                            </InfoText>
                        ))}
                    </View>
                ))}
            </TextWrapper>
    );
};

export default Privacy;