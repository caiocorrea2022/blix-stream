import React, { memo } from 'react';
import { TextInput as Input } from 'react-native-paper';
import theme from '../../../global/theme';


const TextInput = ({ ...props }) => (
    <Input
      style={{backgroundColor:theme.colors.background, fontFamily:theme.fontsFamily.text_Regular}}
      underlineColor={theme.colors.primary_800}
      activeUnderlineColor={theme.colors.primary_900}
      outlineColor={theme.colors.text_900}
      activeOutlineColor={theme.colors.primary_900}
      selectionColor={theme.colors.text_900}
      {...props}
    />
);


export default memo(TextInput);