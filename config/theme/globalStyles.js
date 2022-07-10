import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const Section = styled.View`
    height: ${({ height }) => (height ? height : windowHeight*0.98)};
    background-color: ${({ background }) => (background ? background : THEME.COLORS.BACKGROUND_ABOUT)};
`;

export const ContainerSideView = styled.View`
    flex: ${({ flex }) => (flex ? flex : '1')};
    flex-Direction: ${({ flexDirection }) => (flexDirection ? flexDirection: 'row')};
    background-color: ${({ background }) => (background ? background : THEME.COLORS.BACKGROUND_ABOUT)};
`;

export const SideView = styled.View`
    flex: ${({ flex }) => (flex ? flex : '1')};
    flex-Direction: ${({ flexDirection }) => (flexDirection ? flexDirection: 'column')};
    background-color: ${({ background }) => (background ? background : THEME.COLORS.PRIMARY_900)};
`;

export const Container = styled.View`
    flex: ${({ flex}) => (flex ? flex : 1)};
    background-color: ${({ background }) => (background ? background : THEME.COLORS.BACKGROUND_ABOUT)};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : '')};
`;
export const HeaderContainer = styled.View`
    background-color: ${({ background }) => (background ? background : THEME.COLORS.BACKGROUND_HEADER)};
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'row')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
    width: 100%;
    padding: ${({ padding }) => (padding ? padding : '0.7rem')};
`;

export const MainTitle = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRABIG)}px;
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD)};
	color: ${({ color }) => (color ? color : THEME.COLORS.TITLE_ABOUT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    padding: ${({ padding }) => (padding ? padding : '0')};
`;

export const Title = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.BIG)}px;
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD)};
	color: ${({ color }) => (color ? color : THEME.COLORS.TITLE_ABOUT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    padding: ${({ padding }) => (padding ? padding : '0')};
`;

export const SubTitle = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.STANDARD)}px;
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.MEDIUM)};
	color: ${({ color }) => (color ? color : THEME.COLORS.TITLE_ABOUT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    padding: ${({ padding }) => (padding ? padding : '0')};
`;

export const StandardText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.MEDIUM)}px;
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.MEDIUM)};
	color: ${({ color }) => (color ? color : THEME.COLORS.TEXT_ABOUT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
    padding: ${({ padding }) => (padding ? padding : '0')};
`;

export const SmallText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.SMALL)}px;
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.REGULAR)};
	color: ${({ color }) => (color ? color : THEME.COLORS.TEXT_ABOUT)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
    padding: ${({ padding }) => (padding ? padding : '0')};
    text-decoration-line: ${({ textDecoration }) => (textDecoration ? textDecoration: '')};
`;

export const FooterText = styled.Text`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : THEME.FONTSIZE.EXTRASMALL)}px;
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : THEME.FONTFAMILY.LIGHT)};
	color: ${({ color }) => (color ? color : THEME.COLORS.TEXT_FOOTER)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
    padding: ${({ padding }) => (padding ? padding : '0')};
`;

