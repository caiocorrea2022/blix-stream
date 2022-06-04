import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${THEME.COLORS.PRIMARY_900};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_000};
  font-size: ${RFPercentage(2.5)}px; //medium
  font-family: ${THEME.FONTFAMILY.BOLD};
`;

export const Load = styled.ActivityIndicator.attrs()`
    color: ${THEME.COLORS.BACKGROUND};
`;
