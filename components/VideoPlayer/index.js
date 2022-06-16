import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video }) => {
    return (
        <ReactPlayer
            url={video}
            playing={false}
            width={"100%"}
            controls={true}
            height={"100%"}
        />
    )
}

export default VideoPlayer;