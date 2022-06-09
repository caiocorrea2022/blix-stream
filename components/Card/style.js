import styled from 'styled-components/native';

export const Container = styled.View`
  width:18rem;
  margin: 1rem;
`;

export const Text = styled.Text`
    color: ${props => `${props.color}`};
    font-Size: ${props => `${props.fontSize}`};
    font-family: ${props => `${props.fontFamily}`};
    margin: 0.2rem 0rem;
    text-align: start;
`;