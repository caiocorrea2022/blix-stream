import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Provider = styled.View`
  flex: 1;
  background-color: ${THEME.COLORS.PRIMARY_900};
  justify-content: center;
  align-Items: center;
`;

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-Items: center;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.BACKGROUND};
  text-align: center;
  font-Size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-top: 0.5rem;
`;

export const Subtitle = styled.Text`
  color: ${THEME.COLORS.BACKGROUND};
  text-align: center;
  font-Size:  ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  margin-top: 0.5rem;
`;
