import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';
import './css/App.css';

// Youtube Data API - Access Key
const API_KEY = "";

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    // DEF: Render components for fixed search videos -- 
    componentDidMount() {
        this.onTermSubmit('faky');
    }

    // DEF: This is the main function of the application
    //      Sends a GET request to Youtube Datat API to return a list of videos
    //      based on the search term entered by the user in the SearchBar component
    //      This is an asychronous callback function -- will take time to execute
    //      and return the list of videos
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: API_KEY
            }
        })
        
        // DEF: Update the component state once the response has completed
        //      The selectedVideo is the first video returned from the search
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    // DEF: Update the component state with the selected video from the VideoList component
    //      This is a callback function passed down to VideoList and VideoDetail
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