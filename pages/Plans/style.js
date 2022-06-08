import { FlatList } from "react-native";
import styled from "styled-components/native";
import THEME from "../../config/theme";

export const Container = styled.View`
  flex:1;
  background-color: ${THEME.COLORS.BACKGROUND};
`;

export const HorizontalList = styled.ScrollView.attrs(props => ({
  contentContainerStyle:{
    justifyContent: "center",
    flexDirection: "row",
    flexGrowth: 1,
  }
}))`
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
  flex:1;
  text-align:center;
  justify-content: space-around;
`;

export const Subtitle = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  margin: 0rem 1rem 0rem 1rem;
`;

export const HorizontalListView = styled.View`
  flex:2;
  
`;

export const ItemName = styled.Text`
  font-size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.REGULAR};
  text-align: center;
`;

