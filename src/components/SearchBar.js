import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: '' }

    // DEF: Prevent the form from submitting
    //      Invokes the callback function -- onFormSubmit and passes back the 
    //      term up to the parent component
    //      This is a callback function
    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    }

    // DEF: Set the term to be the value passed in the onChange function
    //      This is a callback function
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