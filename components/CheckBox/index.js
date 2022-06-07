import React, { memo } from 'react';
import { CheckBox as Check} from 'react-native-elements';
import THEME from '../../config/theme';


const CheckBox = ({ ...props }) => (
    <Check
      checkedColor={THEME.COLORS.PRIMARY_900}
      uncheckedColor={THEME.COLORS.TEXT_900}
      textStyle={{color:THEME.COLORS.TEXT_900, fontFamily:THEME.FONTFAMILY.EXTRALIGHT, fontSize:THEME.FONTSIZE.EXTRASMALL}}
      containerStyle={{backgroundColor:THEME.COLORS.BACKGROUND, margin:"1rem"}}
      {...props}
    />
);

export default memo(CheckBox);