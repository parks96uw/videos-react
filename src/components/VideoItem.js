import React from 'react';
import './css/VideoItem.css';

// DEF: Deconstructing prop objects and declaring them video and onVideoSelect
//      Clicking on a video will invoke a callback function defined in the App component
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )

}

export default VideoItem;