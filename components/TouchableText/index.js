import React from 'react';
import { SmallText } from '../../config/theme/globalStyles';
import { Touchable } from './style';

const TouchableText = ({ title, icon, ...rest }) => {
    return (
        <Touchable {...rest}>
            <SmallText>{title}</SmallText>
        </Touchable>
    )
}

export default TouchableText