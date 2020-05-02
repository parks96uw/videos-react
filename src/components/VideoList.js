import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    // map over the videos array
    // give it a unique key
    // pass down the callback -- onVideoSelect
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>;
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )

}

export default VideoList;