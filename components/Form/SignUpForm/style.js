import styled from 'styled-components/native'
import theme from '../../../global/theme';

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${theme.colors.text_900};
  align-self: flex-start;
  font-Size: ${theme.fontsSize.big};
  font-family: ${theme.fontsFamily.text_Bold};
  margin-bottom: 24px;
`;
