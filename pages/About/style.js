import styled from 'styled-components/native';
import THEME from "../../config/theme";

export const Container = styled.View`
 flex: 1;
 background-color: ${THEME.COLORS.BACKGROUND};
`;

export const HorizontalList = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      flexDirection: "row",
      flexGrowth: 1,
    },
  })`
    width: 100%;
  `;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  text-align: center;
`;