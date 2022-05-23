import React from 'react';
import { Container, Title, Load } from './style';

const Button = ({ title, isLoading = false, ...rest }) => {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}

export default Button;