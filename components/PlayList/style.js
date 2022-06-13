import styled from "styled-components/native";
import THEME from '../../config/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Avatar = styled.Image`
	height: 75;
	aspect-ratio: 16/9;
	border-radius: 3;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0.5rem;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-Size: ${THEME.FONTFAMILY.REGULAR};
  font-family: ${THEME.FONTSIZE.MEDIUM};
  text-align: start;
`;