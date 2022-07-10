import styled from 'styled-components/native'
import THEME from '../../config/theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${THEME.COLORS.BACKGROUND_FOOTER};
    padding: 1rem 0.5rem;
`;

export const ContainerMobile = styled.View`
    width:100%;
    background-color: ${THEME.COLORS.BACKGROUND_FOOTER};
    padding: 1rem 0.5rem;
`;

export const FooterRightSide = styled.View`
    width: ${({ width }) => width};
    justify-content:${({ justifyContent }) => justifyContent};
    flex-direction: row;
    align-items: center;
`;

export const FooterLeftSide = styled.View`
    width: ${({ width }) => width};
    justify-content:${({ justifyContent }) => justifyContent};
    flex-direction: row;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 1.04rem;
    height: 0.8rem;
`;

export const FooterLogo = styled.View`
    justify-content:${({ justifyContent }) => justifyContent};
`;