import styled from "styled-components/native";

export const HorizontalList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor:"white"
  },
})`
`;

export const HorizontalListView = styled.View`
  flex:1;
  padding: 1rem 0rem;
  background-color: white;
`;

export const Text = styled.Text`
    color: ${props => `${props.color}`};
    font-size: ${props => `${props.fontSize}`};
    font-family: ${props => `${props.fontFamily}`};
    padding: 0.3rem 0rem;
    text-align: start;
`;