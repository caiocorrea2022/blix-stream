import React, { memo } from 'react';
import { CheckBox as Check } from 'react-native-elements';
import THEME from '../../config/theme';


const CheckBox = ({ ...props }) => (
  <Check
    checkedColor={THEME.COLORS.PRIMARY_900}
    uncheckedColor={THEME.COLORS.STANDARD}
    textStyle={{ color: THEME.COLORS.STANDARD, fontFamily: THEME.FONTFAMILY.EXTRALIGHT, fontSize: THEME.FONTSIZE.SMALL }}
    containerStyle={{ backgroundColor: THEME.COLORS.BACKGROUND, width: "90%", height: "100%", justifyContent: "center" }}
    {...props}
  />
);

export default memo(CheckBox);