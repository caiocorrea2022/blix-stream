import { StyleSheet } from "react-native";
import Colors from './Colors';

/*
** Global unique styles for entire app
*/
export default StyleSheet.create({
    roundBtn: {
      width: "100%",
      backgroundColor: Colors.primary,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderRadius: 25,
      height: 50,
    },
  });