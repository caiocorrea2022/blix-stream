import styled from 'styled-components/native'
import THEME from '../../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  align-self: flex-start;
  font-Size: ${RFPercentage(2.5)}px; //extrasmallpx
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-bottom: 24px;
`;

export const FormMessage = styled.Text`
	color: ${({ error }) => (error ? 'red' : 'green')};
  font-Size: ${RFPercentage(1)}px; //extrasmallpx
  font-family: ${THEME.FONTFAMILY.REGULAR};
	text-align: center;
	margin-top: 1rem;
`;
