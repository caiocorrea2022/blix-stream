import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import THEME from '../../config/theme';

const TextInput = ({ ...rest }) => (
  <Input
    style={{ backgroundColor: THEME.COLORS.BACKGROUND_ABOUT, fontFamily: THEME.FONTFAMILY.REGULAR, fontSize: THEME.FONTSIZE.SMALL}}
    mode='outlined'
    outlineColor={THEME.COLORS.PRIMARY_800}
    selectionColor={THEME.COLORS.TEXT_ABOUT}
    activeOutlineColor={THEME.COLORS.PRIMARY_900}
    placeholderTextColor={THEME.COLORS.TEXT_ABOUT}
    theme={{
      colors: {
        placeholder: THEME.COLORS.TEXT_ABOUT,
        text: THEME.COLORS.TEXT_ABOUT
      }
    }}
    {...rest}
  />
);

export default memo(TextInput);