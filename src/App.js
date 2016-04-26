import React, { Component } from 'react';
import {connect} from 'react-redux';
import Contacts from './Contacts';
import Search from './Search';

class App extends Component {
    render() {

        return (
            <div>
                <Search searchText={this.props.searchText} saveSearchText={this.props.saveSearchText} />
                <Contacts searchText={this.props.searchText} contacts={this.props.contacts} />
            </div>
        );
    }
}

function collect(state) {
    return {
        contacts: state.contacts,
        searchText: state.search
    }
}

function dispatcher(dispatch) {
    return {
        saveSearchText (search) {
            dispatch({
                type: 'SAVE_SEARCH_TEXT',
                search
            });
        }
    }
}

export default connect(collect, dispatcher)(App);
