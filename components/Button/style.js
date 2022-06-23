import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: ${({ width }) => width};
  padding: ${({ padding }) => (padding ? padding : '0.7rem 2rem')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  border-radius: ${({ borderRadius }) => borderRadius};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
  background-color: ${({ colorbutton }) => colorbutton};
`;
