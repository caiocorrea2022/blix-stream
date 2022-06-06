import { FlatList } from "react-native";
import styled from "styled-components/native";
import THEME from "../../../config/theme";

export const Container = styled.View`
  flex:1;
  background-color: ${THEME.COLORS.BACKGROUND};
`;

export const HorizontalList = styled.ScrollView.attrs(props => ({
  contentContainerStyle:{
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
  }
}))`
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ItemContainer = styled.View`
  background-color: ${THEME.COLORS.TEXT_000};
  border-radius: 5px;
  padding: 0.15rem 0.6rem;
  margin: 0.25rem;
  align-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  align-self: center;
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin: 1rem 0rem;
`;

export const Subtitle = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  text-align: center;
  font-size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  margin: 0rem 0rem 1rem 0.5rem;
`;

export const ItemName = styled.Text`
  font-size: ${THEME.FONTSIZE.SMALL};
  font-family: ${THEME.FONTFAMILY.REGULAR};
  align-self: center;
`;

