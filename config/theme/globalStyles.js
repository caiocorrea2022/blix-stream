import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const Section = styled.View`
background-color: pink;
height: ${({ height }) => (height ? height : windowHeight * 0.80)};
`;

export const Container = styled.View`
flex:1;
background-color: pink;
`;

export const MainTitle = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRABIG)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TEXT_900)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const Title = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.BIG)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TEXT_900)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const SubTitle = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRAMEDIUM)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.MEDIUM)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TEXT_900)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const Description = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.MEDIUM)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.REGULAR)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TEXT_900)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const SmallText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.SMALL)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.LIGHT)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TEXT_900)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const FooterText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRASMALL)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.EXTRALIGHT)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TEXT_900)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

