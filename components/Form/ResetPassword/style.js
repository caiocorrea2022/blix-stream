import styled from 'styled-components/native'
import theme from '../../../global/theme';

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${theme.colors.text_900};
  align-self: flex-start;
  font-Size: ${theme.fontsSize.medium};
  font-family: ${theme.fontsFamily.text_Bold};
  margin-bottom: 24px;
`;

export const FormMessage = styled.Text`
	color: ${({ error }) => (error ? 'red' : 'green')};
  font-Size: ${theme.fontsSize.extrasmall};
  font-family: ${theme.fontsFamily.text_Regular};
	text-align: center;
	margin-top: 1rem;
`;
