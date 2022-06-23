import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: ${({ padding }) => (padding ? padding : '0.5rem 2rem')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  border-radius: ${({ borderRadius }) => borderRadius};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
  background-color: ${({ colorbutton }) => colorbutton};
`;
