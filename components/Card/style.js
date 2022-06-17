import styled from "styled-components/native";

export const HorizontalList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
})`
`;

export const HorizontalListView = styled.View`
  flex-basis: auto;
  padding: 2rem 1rem 0rem 1rem;
  overflow-x: hidden;
`;
