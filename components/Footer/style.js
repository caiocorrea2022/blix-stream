import styled from 'styled-components/native'
import THEME from '../../config/theme';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 1rem 1rem;
    width: 100%;
 
`;

export const FooterRightSide = styled.View`
width:50%;
justify-content: flex-end;
flex-direction: row;
`;

export const FooterLeftSide = styled.View`
width:50%;
justify-content: flex-start;
flex-direction: row;
`;

export const Logo = styled.Image`
	width: 1.2rem;
	height: 1rem;
`;

export const FooterLogo = styled.View`
justify-content: flex-start;

`;

export const FooterSocialIcon = styled.Text`
	color: #fff;
	font-size: 24px;
`;