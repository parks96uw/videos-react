import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

import './App.css';

const API_KEY = "";

class App extends React.Component {
    state = { videos: [] }

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
        this.setState({
            videos: response.data.items
        })
        console.log(response);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;