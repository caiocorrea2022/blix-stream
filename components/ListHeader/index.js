import React from 'react'
import { Text, View } from "../Themed";
import { AntDesign, Entypo } from "@expo/vector-icons";
import styles from "./style";

const ListHeader = ({title, description}) => {

	return (
        <View style={{ padding: 12 }}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginVertical: 10 }}>{description}</Text>
        {/* <MaterialIcons name="hd" size={24} color="white" /> */}
      </View>

      {/* Row with icon buttons */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <AntDesign name="pdffile1" size={24} color={"#ccc"} />
          <Text style={{ color: "darkgrey", marginTop: 5 }}>
            Material em PDF
          </Text>
        </View>

        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <Entypo name="link" size={24} color={"#ccc"} />
          <Text style={{ color: "darkgrey", marginTop: 5 }}>
            Acessar aula ao vivo
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}></View>
    </View>
	)
}

export default ListHeader
      