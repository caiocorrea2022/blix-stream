import React from 'react';
import { Container } from './style';
import { StandardText } from '../../config/theme/globalStyles';
import { ActivityIndicator } from 'react-native';
import THEME from '../../config/theme';
import {borderRadiusButtons} from '../../config/data'

const Button = ({
  colortitle,
  borderRadius,
  colorbutton,
  title,
  width,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container
      enabled={!isLoading}
      colorbutton={colorbutton ? colorbutton : THEME.COLORS.PRIMARY_900}
      width={width}
      borderRadius={borderRadius ? borderRadius : borderRadiusButtons}
      style={{ opacity: ( isLoading === true) ? 0.5 : 1}}
      {...rest}
    >
      {isLoading
        ? <ActivityIndicator color={THEME.COLORS.TEXT_BUTTON} />
        : <StandardText fontFamily={THEME.FONTFAMILY.BOLD} style={{ color: colortitle ? colortitle : THEME.COLORS.TEXT_BUTTON }}>{title}</StandardText>}
    </Container>
  )
}

export default Button;