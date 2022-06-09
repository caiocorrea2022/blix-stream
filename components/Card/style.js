import styled from "styled-components/native";

export const HorizontalList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "green",
  },
})`
`;

export const HorizontalListView = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
    color: ${props => `${props.color}`};
    font-size: ${props => `${props.fontSize}`};
    font-family: ${props => `${props.fontFamily}`};
    margin: 0.2rem 0rem;
    text-align: start;
`;