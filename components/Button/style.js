import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.TouchableOpacity`
  padding: ${({ padding }) => (padding ? padding : '0.5rem 2rem')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '30px')};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : THEME.COLORS.PRIMARY_900)};
`;

export const Load = styled.ActivityIndicator.attrs({ color: THEME.COLORS.TEXT_BUTTON })`
`;

