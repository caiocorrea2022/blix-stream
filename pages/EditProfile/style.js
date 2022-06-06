import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
 flex: 1;
`;

export const CategoryText = styled.Text`
	color: ${THEME.COLORS.TEXT_900};
    font-family: ${THEME.FONTFAMILY.MEDIUM};
    font-size: ${THEME.FONTSIZE.MEDIUM};
    margin-bottom: 0.1rem;
  	margin-left: 1rem;
`;