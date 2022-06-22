import React, { memo } from 'react';
import { CheckBox as Check } from 'react-native-elements';
import THEME from '../../config/theme';


const CheckBox = ({ ...props }) => (
  <Check
    checkedColor={THEME.COLORS.PRIMARY_900}
    uncheckedColor={THEME.COLORS.TEXT_ABOUT}
    textStyle={{ color: THEME.COLORS.TEXT_ABOUT, fontFamily: THEME.FONTFAMILY.LIGHT, fontSize: THEME.FONTSIZE.EXTRASMALL }}
    containerStyle={{ backgroundColor: THEME.COLORS.BACKGROUND_ABOUT, width: "90%", height: "100%", justifyContent: "center" }}
    {...props}
  />
);

export default memo(CheckBox);