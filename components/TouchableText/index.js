import React from 'react';
import { SmallText } from '../../config/theme/globalStyles';
import { Touchable } from './style';

const TouchableText = ({ title, color, textDecoration, fontFamily, fontSize, onPress, ...rest }) => {
    return (
        <Touchable {...rest}>
            <SmallText
                textDecoration={textDecoration}
                color={color}
                onPress={onPress}
                fontFamily={fontFamily}
                fontSize={fontSize}
                margin="0rem 1rem"
            >{title}
            </SmallText>
        </Touchable>
    )
}

export default TouchableText