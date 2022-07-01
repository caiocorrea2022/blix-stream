import styled from "styled-components/native";
import THEME from "../../config/theme";


export const Container = styled.View`

`;

export const HorizontalList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
})`
`;

export const ItemContainer = styled.View`
  background-color: ${THEME.COLORS.PRIMARY_800};
  border-radius: 5px;
  padding: 0.4rem 1rem;
  margin: 0.3rem;
`;

export const TitleView = styled.View`
  padding: 1rem 0rem;
  flex-basis: "auto";
`;

export const HorizontalListView = styled.View`
  flex-basis: "auto";
  background-color: "green";
`;