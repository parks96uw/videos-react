import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos}) => {
    // map over the videos array
    // give it a unique key
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>;
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )

}

export default VideoList;