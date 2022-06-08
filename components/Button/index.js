import React from 'react';
import { Container, Title, Load } from './style';

const Button = ({ colortitle, colorbutton, title, isLoading = false, ...rest }) => {
  return (
    <Container enabled={!isLoading} {...rest} style={{ backgroundColor: colorbutton }}>
      {isLoading ? <Load /> : <Title style={{ color: colortitle }}>{title}</Title>}
    </Container>
  )
}

export default Button;