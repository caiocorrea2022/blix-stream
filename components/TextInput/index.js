import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import colors from '../../styles/colors';


const TextInput = ({ ...props }) => (
    <Input
      style={{backgroundColor:colors.background}}
      underlineColor={colors.primary}
      activeUnderlineColor={colors.primary}
      outlineColor={colors.text}
      activeOutlineColor={colors.primary}
      {...props}
    />
);


export default memo(TextInput);