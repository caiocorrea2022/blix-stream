import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import THEME from '../../config/theme';


const TextInput = ({ ...props }) => (
    <Input
      style={{backgroundColor:THEME.COLORS.BACKGROUND, fontFamily:THEME.FONTFAMILY.REGULAR}}
      underlineColor={THEME.COLORS.PRIMARY_800}
      outlineColor={THEME.COLORS.TEXT_900}
      selectionColor={THEME.COLORS.TEXT_900}
      activeUnderlineColor={THEME.COLORS.PRIMARY_900}
      placeholderTextColor={THEME.COLORS.TEXT_700}
      theme={{ colors: {placeholder: THEME.COLORS.TEXT_700, text: THEME.COLORS.TEXT_900}}}
      {...props}
    />
);


export default memo(TextInput);