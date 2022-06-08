import React from 'react';
import { Video } from 'expo-av';
import styles from './style';

const VideoPlayer = ({video}) => {
    return (
        <Video
        source={{uri: video}}
        useNativeControls
        style={styles.video}
        resizeMode="contain"
        />
    )

}

export default VideoPlayer;