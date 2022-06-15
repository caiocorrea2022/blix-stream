import styled from "styled-components/native";
import THEME from "../../config/theme";

export const Container = styled.View`
  height: 100%;
`;

export const HorizontalList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
})`
`;

export const ItemContainer = styled.View`
  background-color: ${THEME.COLORS.BACKGROUND};
  border-radius: 5px;
  padding: 0.4rem 1rem;
  margin: 0.3rem;
`;

export const TitleView = styled.View`
  flex:1.5;
  text-align:center;
  justify-content: space-around;
`;

export const HorizontalListView = styled.View`
  flex: 5;
`;