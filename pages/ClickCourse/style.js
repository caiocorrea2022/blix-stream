import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
 flex: 1;
 background-color: ${THEME.COLORS.BACKGROUND};
`;

export const ContentDesktop = styled.View`
 width: 60%;
 padding: 2rem 6rem;
`;

export const ContentMobile = styled.View`
 padding: 2rem 1rem;
`;

export const Image = styled.Image`
  aspect-Ratio: 16 / 9;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
`;

export const ContentList = styled.View`
width: 40%;
padding: 2rem 0rem;
`;

export const ContentPrice = styled.View`
width: "70%"; 
align-self:"center";
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  text-align: flex-start;
  font-size: ${props => `${props.fontSize}`};
  font-family: ${props => `${props.fontFamily}`};
  padding: 0rem 0rem 1rem 0rem;
`;

export const Text = styled.Text`
  color: ${THEME.COLORS.TEXT_800};
  font-size: ${props => `${props.fontSize}`};
  font-family: ${THEME.FONTFAMILY.REGULAR};
  text-align: justify;
  padding: 0rem 0rem 1rem 0rem;
`;