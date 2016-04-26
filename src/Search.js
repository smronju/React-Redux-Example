import React, { PropTypes } from 'react'

class Search extends React.Component {
    handleSearch = (e) => {
        this.props.saveSearchText(e.target.value);
    }

    render () {
        return (
            <input type="text" value={this.props.searchText} onChange={this.handleSearch} />
        );
    }
}

export default Search;
