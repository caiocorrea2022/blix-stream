import styled from 'styled-components/native'

export const Wrapper = styled.View`
`;

export const Text = styled.Text`
  color: ${props => `${props.color}`};
  font-size: ${props => `${props.fontSize}`};
  font-family: ${props => `${props.fontFamily}`};
  align-self: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top:2rem;
`;