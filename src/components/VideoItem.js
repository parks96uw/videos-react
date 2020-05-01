import React from 'react';

const VideoItem = ({ video }) => {
    // console.log(video);
    return (
        <div className="item">
            <img src={ video.snippet.thumbnails.medium.url } />
            <h3>{ video.snippet.title }</h3>

        </div>
    )

}

export default VideoItem;