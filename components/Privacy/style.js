import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const TextWrapper = styled.View`
	padding: 10px 10px;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	background-color: green;
`;

export const InfoName = styled.Text`
	font-Size: ${THEME.FONTSIZE.MEDIUM};
	font-family: ${THEME.FONTFAMILY.REGULAR};
	color: $403ae3;
`;
export const InfoText = styled.Text`
	margin: 1rem 0 auto;
	font-Size: ${THEME.FONTSIZE.SMALL};
	font-family: ${THEME.FONTFAMILY.LIGHT};
	color: $403ae3;
	margin-bottom:1rem;
`;