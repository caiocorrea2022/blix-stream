import React from 'react';
import { SmallText } from '../../config/theme/globalStyles';
import { Touchable } from './style';

const TouchableText = ({ title, color, textDecoration, icon, onPress, ...rest }) => {
    return (
        <Touchable {...rest}>
            <SmallText textDecoration={textDecoration} color={color} onPress={onPress}>{title}</SmallText>
        </Touchable>
    )
}

export default TouchableText