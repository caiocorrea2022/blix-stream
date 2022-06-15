import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const Section = styled.View`
height: ${({ height }) => (height ? height : windowHeight * 0.95)};
`;

export const Container = styled.View`
flex:1;
background-color: ${({ background }) => (background ? background : THEME.COLORS.BACKGROUND)};
justify-content: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const HeaderContainer = styled.View`
background-color: ${({ background }) => (background ? background : THEME.COLORS.BACKGROUND)};
flex-direction: row;
justify-content: ${({ textAlign }) => (textAlign ? textAlign : 'space-between')};
width: 100%;
padding: 1rem;
`;

export const MainTitle = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRABIG)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.MAIN_TITLE)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const Title = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.BIG)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.TITLE)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const SubTitle = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRAMEDIUM)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.MEDIUM)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.SUB_TITLE)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const Description = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.MEDIUM)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.REGULAR)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.DESCRIPTION)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const SmallText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.SMALL)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.LIGHT)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.SMALL_TEXT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const FooterText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRASMALL)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.EXTRALIGHT)};
	color: ${({ inverse }) => (inverse ? inverse : THEME.COLORS.FOOTER_TEXT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
`;

