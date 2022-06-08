import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { AntDesign, Entypo } from "@expo/vector-icons";
import styles from "./style";
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../components/Header";
import PlayList from "../../components/PlayList";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";

const ClickClass = ({ route, navigation }) => {
  const { videos } = route.params;
  const [video, setVideo] = useState(videos[0]);
  const plot =
    "When he impresses a big lawyer with his razor-sharp mind, a college droput scores a coveted associate job, even though he has no legal credentials.";

  const OutsideView = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <View><ViewVideo></ViewVideo>
    <ViewFlatlist></ViewFlatlist></View> :  <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
      <ViewVideo></ViewVideo>
      <ViewFlatlist></ViewFlatlist>
    </View>;
  };

  const ViewVideo = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <View><VideoPlayer video={video.link} /></View> : <View style={{ flexDirection: "column", alignSelf: "center", width: "60%" }}
  >
    <VideoPlayer video={video.link} />
  </View>;
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <View>
    <FlatList
    data={videos}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        onPress={() => {
          setVideo(videos[index]);
        }}
        style={{ margin: 10 }}
      >
        <PlayList {...item}></PlayList>
      </TouchableOpacity>
    )}
    style={{ marginBottom: "1rem", flexGrow: 0 }}
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
    }
  /></View> : <View style={{ flexDirection: "column", alignSelf: "center", width: "30%", height: "76%" }}>
              <FlatList
            data={videos}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setVideo(videos[index]);
                }}
                style={{ margin: 10 }}
              >
                <PlayList {...item}></PlayList>
              </TouchableOpacity>
            )}
            style={{ marginBottom: "1rem", flexGrow: 0 }}
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
            }
          />
    </View>;
  };

  return (
    <ViewPortProvider>
    <View style={{ flexDirection: "column", flex: 1 }}>
      <Header goBack={navigation.goBack} />
      <OutsideView></OutsideView>
    </View>
    </ViewPortProvider>
  );
};

export default ClickClass;
