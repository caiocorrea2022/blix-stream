import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Container, ContentVideo, ContentList } from './style';
import VideoPlayer from "../../components/VideoPlayer";
import Header from "../../components/Header";
import PlayList from "../../components/PlayList";
import ViewPortProvider from "../../hooks/MobileOrDesktop/ViewPortProvider";
import useViewport from "../../hooks/MobileOrDesktop/useViewport";
import ListHeader from "../../components/ListHeader";

const ClickClass = ({ route, navigation }) => {
  const { videos, name, description, pdf, url } = route.params;
  const [video, setVideo] = useState(videos[0]);

  const OutsideView = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <ViewVideo></ViewVideo>
        <ViewFlatlist></ViewFlatlist>
      </View>
    ) : (
      <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
        <ViewVideo></ViewVideo>
        <ViewFlatlist></ViewFlatlist>
      </View>
    );
  };

  const ViewVideo = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
        <VideoPlayer video={video.link} />
      </View>
    ) : (
      <ContentVideo>
        <VideoPlayer video={video.link} />
      </ContentVideo>
    );
  };

  const ViewFlatlist = () => {
    const { width } = useViewport();
    const breakpoint = 1080;

    return width < breakpoint ? (
      <View>
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
          ListHeaderComponent={<ListHeader title={name} description={description} pdf={pdf} url={url}></ListHeader>}
        />
      </View>
    ) : (
      <ContentList>
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
          ListHeaderComponent={<ListHeader title={name} description={description} pdf={pdf} url={url}></ListHeader>}
        />
      </ContentList>
    );
  };

  return (
    <ViewPortProvider>
      <Container>
        <Header goBack={navigation.goBack} />
        <OutsideView></OutsideView>
      </Container>
    </ViewPortProvider>
  );
};

export default ClickClass;
