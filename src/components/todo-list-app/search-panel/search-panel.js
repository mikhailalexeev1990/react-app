import React, {Component} from 'react';
import "./search-panel.css";


export default class SearchPanel extends Component {
    state = {
        searchText: ''
    }

    onSearchChange = (e) => {
        const searchText = e.target.value;
        this.setState({searchText});
        this.props.onSearchChange(searchText);
    }

    render() {
        return (
            <input
                type="text"
                value={this.state.searchText}
                onChange={this.onSearchChange}
                className="form-control search-input"
                placeholder="type to search"
            />
        );
    }
}
