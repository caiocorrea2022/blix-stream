import React from 'react';
import { Container, Load } from './style';
import { StandardText } from '../../config/theme/globalStyles';

const Button = ({ colortitle, colorbutton, title, isLoading = false, ...rest }) => {
  return (
    <Container enabled={!isLoading} {...rest} style={{ backgroundColor: colorbutton }}>
      {isLoading ? <Load /> : <StandardText style={{ color: colortitle }}>{title}</StandardText>}
    </Container>
  )
}

export default Button;