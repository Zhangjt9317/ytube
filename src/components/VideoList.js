import React from 'react';
import VideoItem from "./VItem";

const VideoList = ({videos, onVideoSelect}) => {
    // props.videos
    const renderdList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />;
    });

    return (
        <div
            className={"ui relaxed divided list"}
        >
            {renderdList}
        </div>
    )
};

export default VideoList;