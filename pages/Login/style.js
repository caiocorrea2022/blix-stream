import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.COLORS.BACKGROUND};
  padding: 24px;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  },
})`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  text-align: center;
  font-Size: ${RFPercentage(4.5)}px;
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-top: 0.5rem;
`;

export const Header = styled.View`
  display:flex;
  padding: 1rem;
`;

export const Image = styled.Image`
  align-self: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

export const Wrapper = styled.View`
`;
