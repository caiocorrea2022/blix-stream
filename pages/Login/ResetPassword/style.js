import styled from 'styled-components/native'
import THEME from '../../../config/theme';

export const Container = styled.View`
`;

export const FormMessage = styled.Text`
	color: ${({ error }) => (error ? THEME.COLORS.ALERT : 'green')};
  font-Size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.REGULAR};
	text-align: center;
`;