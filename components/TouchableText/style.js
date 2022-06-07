import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.TouchableOpacity`
    margin: 1rem 1rem;
`;

export const Title = styled.Text`
    color: ${THEME.COLORS.TEXT_900};
    font-size: ${THEME.FONTSIZE.MEDIUM};
    font-family: ${THEME.FONTFAMILY.REGULAR};
    text-align: center;
`;