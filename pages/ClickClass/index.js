// import React, { useState } from "react";
// import { View, StyleSheet, TouchableOpacity, FlatList, Dimensions} from "react-native";
// import VideoPlayer from "../../components/VideoPlayer";
// import { Container, Text, ScrollScreen } from "./style";
// import Header from "../../components/Header";
// import PlayList from "../../components/PlayList";

// const WIDTH = Dimensions.get('window').width;

// export default function ClickClass({ route, navigation }) {
//   const { videos } = route.params;
//   const [video, setVideo] = useState(videos[0]);

//   const FlatListItemSeparator = () => {
//     return <View style={{ height: 1, backgroundColor: "green" }} />;
//   };

//   //TODO criar flatlist pra mostrar a playlist e trocar o player conforme o click
//   return (
//       <Container>
//       <Header goBack={navigation.goBack} />
//       <VideoPlayer video={video.link}></VideoPlayer>
//         <FlatList
//           data={videos}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={FlatListItemSeparator}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity
//               onPress={() => {
//                 setVideo(videos[index].link);
//               }}
//             >
//               <PlayList {...item}></PlayList>
//             </TouchableOpacity>
//           )}
//           showsVerticalScrollIndicator={false}
//         />
//     </Container>
//   );
// }

// const styles =StyleSheet.create({
//     container:{
//         backgroundColor:"white",
//         margin:5,
//         padding:5,
//         height:140,
//         justifyContent:'center',
//         flexDirection:"row",
//     },
//     view1: {
//         flex: 1,
//         flexDirection: "row",
//         alignItems: "center",
//         margin: 10,
//       },
//     viewVideo:{
//         width: WIDTH*0.35,
//         resizeMode: 'center',
//         borderRadius:15,
//         justifyContent:'center',
//         marginRight:"2%",
//     },
//     viewTexts :{
//         width: WIDTH*0.60,
//         paddingTop: 2,
//         justifyContent:"flex-start",
//     },
//     text1: {
//         fontSize:16,
//         color:"black",
//         fontWeight:"bold",
//     },
//     text2:{
//         fontSize:14,
//         color:"black",
//         textAlign:'left'
//     },
//     text3:{
//         fontSize:12,
//         color:"black",
//         textAlign:'left'
//     },
//     })

import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { AntDesign, Entypo } from "@expo/vector-icons";
import styles from "./style";
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../components/Header";
import PlayList from "../../components/PlayList";

const ClickClass = ({ route }) => {
  const { videos } = route.params;
  const [video, setVideo] = useState(videos[0]);
  const plot =
    "When he impresses a big lawyer with his razor-sharp mind, a college droput scores a coveted associate job, even though he has no legal credentials.";
  return (
      <View>
      <View>
    <Header goBack={navigation.goBack} />
    </View>
    {/* <View  style={{ flexDirection: "row" }}> */}
    <View>
      <VideoPlayer video={video.link} />
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={() => { setVideo(videos[index]) }}
        >
            <PlayList {...item}
            ></PlayList>
            </TouchableOpacity>
        )}
        style={{ marginBottom: '1rem' }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>Nome Card Yoga Lindu</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginVertical: 10 }}>{plot}</Text>
              {/* <MaterialIcons name="hd" size={24} color="white" /> */}
            </View>

            {/* Row with icon buttons */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="pdffile1" size={24} color={"#ccc"} />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>PDFs</Text>
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
        }
      />
    </View>
     </View>
  );
};

export default ClickClass;
