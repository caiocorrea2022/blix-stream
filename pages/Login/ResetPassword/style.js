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

export const ViewButton = styled.View`
  padding: 0.5rem 0rem;
  justify-content:center;
  align-items: center;
`;

export const ViewTextInput = styled.View`
  height: 5rem;
`;

export const ViewText = styled.View`
  height: 80%;
`;

export const ViewHelper = styled.View`
  height: 20%;
  justify-content: center;
`;
