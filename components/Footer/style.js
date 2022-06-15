import styled from 'styled-components/native'
import THEME from '../../config/theme';

export const Container = styled.View`
width: 100%;
flex-direction: row;
background-color: ${THEME.COLORS.TEXT_700};
padding: 1rem;

`;

export const FooterRightSide = styled.View`
width:50%;
justify-content: flex-end;
flex-direction: row;
align-items: center;
`;

export const FooterLeftSide = styled.View`
width:50%;
justify-content: flex-start;
flex-direction: row;
align-items: center;
`;

export const Logo = styled.Image`
width: 1.2rem;
height: 1rem;
`;

export const FooterLogo = styled.View`
justify-content: flex-start;
`;