import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import VideoPlayer from '../../components/VideoPlayer';
import { Wrapper, Container, ContentVideo, ContentText, Text} from './style';
import Header from '../../components/Header';

export default function ClickClass({ route, navigation }) {
    const { videos } = route.params;
    const [video, setVideo] = useState(videos[0]);

    //TODO criar flatlist pra mostrar a playlist e trocar o player conforme o click
    // const video = videos[0];
    return (
        <Container>
            <Header goBack={navigation.goBack}/>
            <VideoPlayer video={video}></VideoPlayer>
            <FlatList
                data={videos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => { setVideo(videos[index]) }}
                    >
                        <Wrapper>
                            <ContentVideo>
                                <VideoPlayer video={item} playing={false} height={"100%"} width={"100%"} light={true} />
                            </ContentVideo>
                            <ContentText>
                                <Text numberOfLines={2}>{item.title}</Text>
                                {/* <Text style ={styles.text2} numberOfLines={2}>{Descricao}</Text> */}
                            </ContentText>
                        </Wrapper>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}