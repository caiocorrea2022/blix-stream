import styled from 'styled-components/native'
import THEME from '../../../config/theme';

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  align-self: flex-start;
  font-Size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-bottom: 24px;
`;

export const FormMessage = styled.Text`
	color: ${({ error }) => (error ? 'red' : 'green')};
  font-Size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.REGULAR};
	text-align: center;
	margin-top: 1rem;
`;
