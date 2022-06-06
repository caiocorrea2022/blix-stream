import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import THEME from '../../config/theme';


const TextInput = ({ ...props }) => (
    <Input
      style={{backgroundColor:THEME.COLORS.BACKGROUND, fontFamily:THEME.FONTFAMILY.REGULAR}}
      underlineColor={THEME.COLORS.PRIMARY_800}
      activeUnderlineColor={THEME.COLORS.PRIMARY_900}
      outlineColor={THEME.COLORS.TEXT_900}
      activeOutlineColor={THEME.COLORS.PRIMARY_900}
      selectionColor={THEME.COLORS.TEXT_900}
      {...props}
    />
);


export default memo(TextInput);