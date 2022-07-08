import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Footer = styled.View`
    padding: 1rem 0rem;
    flex-direction: row;
    justify-content: center;
    background-color: ${THEME.COLORS.BACKGROUND_FOOTER};
`;

export const Logo = styled.Image`
    width: 1.3rem;
    height: 1rem;
`;
