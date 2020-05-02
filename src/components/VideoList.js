import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    // DEF: Map the passed videos prop and link them 
    //      Pass down callback function onVideoSelect as a prop
    //      Defines unique key for image
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>;
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )

}

export default VideoList;