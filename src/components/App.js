import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

import './css/App.css';

const API_KEY = "";

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    // when user first loads in, the default video will be buildings
    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 10,
                key: API_KEY
            }
        })
        
        // set the list of videos
        // default to the first video returned as selectedVideo
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    // A callback function invoked from VideoList -> VideoItem
    // TODO: Pass this information down to the VideoDetail component
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;