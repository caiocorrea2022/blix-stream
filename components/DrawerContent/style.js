import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
 flex: 1;
`;

export const Text = styled.Text`
    color: ${THEME.COLORS.TEXT_900};
    font-Size: ${THEME.FONTSIZE.SMALL};
    font-family: ${THEME.FONTFAMILY.REGULAR};
`;

export const FooterText = styled.Text`
    color: ${THEME.COLORS.TEXT_900};
    padding: 0 0.5rem;
    font-Size: ${THEME.FONTSIZE.EXTRASMALL};
    font-family: ${props => `${props.fontFamily}`};
    text-align: center;
`;

export const Footer = styled.View`
    padding: 1rem 0rem;
    flex-direction: row;
    justify-content: center;
    background-color: ${THEME.COLORS.PRIMARY_700};
`;

