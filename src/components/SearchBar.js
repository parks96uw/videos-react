import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' }

    // prevent form from submitting
    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <h1>Video Search</h1>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;