import styled from 'styled-components/native';
import THEME from "../../config/theme";

import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const Container = styled.ScrollView`
 flex: 1;
 background-color: ${THEME.COLORS.BACKGROUND};
`;


export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  text-align: center;
`;

export const PricingView = styled.View`
height:${windowHeight * 0.95};
`;

export const CardView = styled.View`
height:${windowHeight * 0.95};
`;