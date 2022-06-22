import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import THEME from '../../config/theme';

const TextInput = ({ ...props }) => (
  <Input
    style={{ backgroundColor: THEME.COLORS.BACKGROUND_ABOUT, fontFamily: THEME.FONTFAMILY.REGULAR, fontSize: THEME.FONTSIZE.SMALL}}
    underlineColor={THEME.COLORS.PRIMARY_800}
    outlineColor={THEME.COLORS.TEXT_ABOUT}
    selectionColor={THEME.COLORS.TEXT_ABOUT}
    activeUnderlineColor={THEME.COLORS.PRIMARY_900}
    placeholderTextColor={THEME.COLORS.TEXT_ABOUT}
    theme={{
      colors: {
        placeholder: THEME.COLORS.TEXT_ABOUT,
        text: THEME.COLORS.TEXT_ABOUT
      }
    }}
    {...props}
  />
);

export default memo(TextInput);