import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import THEME from '../../config/theme';

const TextInput = ({ ...props }) => (
  <Input
    style={{ backgroundColor: THEME.COLORS.BACKGROUND, fontFamily: THEME.FONTFAMILY.REGULAR, fontSize: THEME.FONTSIZE.MEDIUM, flex: 1 }}
    underlineColor={THEME.COLORS.PRIMARY_800}
    outlineColor={THEME.COLORS.STANDARD}
    selectionColor={THEME.COLORS.STANDARD}
    activeUnderlineColor={THEME.COLORS.PRIMARY_900}
    placeholderTextColor={THEME.COLORS.SMALL_TEXT}
    theme={{ colors: { placeholder: THEME.COLORS.SMALL_TEXT, text: THEME.COLORS.STANDARD } }}
    {...props}
  />
);

export default memo(TextInput);