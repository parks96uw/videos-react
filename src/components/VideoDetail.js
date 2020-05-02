import React from 'react';

// DEF: Deconstructing props as video
const VideoDetail = ({ video }) => {
    // DEF: If a video has not been searched for yet, present a loading message
    if (!video) {
        return <div>Loading...</div>;
    }
    
    // DEF: Link to embedded video
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video-player" src={videoSrc}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )

}

export default VideoDetail;