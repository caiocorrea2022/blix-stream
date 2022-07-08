import React from 'react';
import { SmallText } from '../../config/theme/globalStyles';
import { Touchable } from './style';

const TouchableText = ({ title, color, textDecoration, fontFamily, fontSize, onPress, margin, ...rest }) => {
    return (
        <Touchable {...rest}>
            <SmallText
                textDecoration={textDecoration}
                color={color}
                onPress={onPress}
                fontFamily={fontFamily}
                fontSize={fontSize}
                margin={margin ? margin : margin}
            >{title}
            </SmallText>
        </Touchable>
    )
}

export default TouchableText