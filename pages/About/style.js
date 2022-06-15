import styled from 'styled-components/native';
import THEME from "../../config/theme";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    flex:1,
  },
})`  
`;

export const Poster = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;

export const TitleView = styled.View`
height: 10%;
justify-content: center;
align-items: center;
`;

export const Banner = styled.View`
height:${windowHeight * 0.70};
width: 90%;
background-color: yellow;
`;