import React from 'react';
import { Video } from 'expo-av';

const VideoPlayer = ({ video }) => {
    return (
        <Video
            source={{ uri: video }}
            useNativeControls
            style={{ width: '100%', aspectRatio: 16 / 9, }}
            resizeMode="contain"
        />
    )
}

export default VideoPlayer;