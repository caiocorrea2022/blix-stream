import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av'

const VideoPlayer = ({video}) => {
    return (
        <View style={styles.container}>
        <Video
        source={{uri: video.link}}
        useNativeControls
        style={styles.video}
        resizeMode="contain"
        />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    video: {
      flex: 1,
      alignSelf: 'stretch'
    },

});


export default VideoPlayer;