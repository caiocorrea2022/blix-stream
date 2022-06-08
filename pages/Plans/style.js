import { FlatList } from "react-native";
import styled from "styled-components/native";
import THEME from "../../config/theme";

export const Container = styled.View`
  flex:1;
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

export const ViewHeader = styled.View`
  flex: 0.6;
`;

export const ItemContainer = styled.View`
  background-color: ${THEME.COLORS.TEXT_000};
  border-radius: 5px;
  padding: 0.4rem 1rem;
  margin: 0.3rem;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;

export const TitleView = styled.View`
  flex:2;
  text-align:center;
  justify-content: space-around;
`;

export const Subtitle = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  margin: 0rem 1rem 0rem 1rem;
  text-align: center;
`;

export const HorizontalListView = styled.View`
  flex:6;
`;

export const ItemName = styled.Text`
  font-size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.REGULAR};
  text-align: center;
`;

