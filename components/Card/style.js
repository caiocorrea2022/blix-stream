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

export const ViewTitleCourse = styled.View`
  height: 20%;
  justify-content: center;
`;

export const ViewSmallTextCourse = styled.View`
  height: 60%;
`;

export const ViewTitleCategory = styled.View`
  flex-basis: auto;
  justify-content: center;
`;

export const ViewSmallTextCategory = styled.View`
  flex-basis: auto;
`;

export const ViewPrice = styled.View`
flex-basis: auto;
margin-bottom: 0.5rem;
`;