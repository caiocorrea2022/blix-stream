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
  flex: 1;
`;

export const Text = styled.Text`
    color: ${props => `${props.color}`};
    font-size: ${props => `${props.fontSize}`};
    font-family: ${props => `${props.fontFamily}`};
    padding: 0.3rem 0rem;
    text-align: start;
`;