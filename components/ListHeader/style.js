import styled from "styled-components/native";


export const Container = styled.View`
padding: 0rem 1rem;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 1rem 0rem;
`;

export const ContentIcon = styled.View`
  align-items: center;
  margin-right: 1rem;
`;

export const Text = styled.Text`
  color: ${props => `${props.color}`};
  font-size: ${props => `${props.fontSize}`};
  font-family: ${props => `${props.fontFamily}`};
  margin-top: 1rem;
`;
