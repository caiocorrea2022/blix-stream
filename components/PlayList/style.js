// import styled from "styled-components/native";

// export const Row = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 5;
// `;

// export const Image = styled.image`
//   height: 75;
//   aspect-ratio: 16/9;
//   resize-mode: "cover";
//   border-radius: 3;
// `;

// export const Title = styled.Text`
//   color: ${THEME.COLORS.TEXT_900};
//   font-size: ${THEME.FONTSIZE.SMALL};
//   font-family: ${THEME.FONTFAMILY.BOLD};
// `;

// export const TitleContainer = styled.View`
//   flex: 1;
//   padding: 5;
//   justify-content: center;
// `;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  title: {},
  duration: {
    color: "darkgrey",
    fontSize: 10,
  },
  plot: {
    color: "darkgrey",
  },
});

export default styles;
