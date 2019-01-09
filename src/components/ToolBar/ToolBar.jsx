import React from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import { updateSearchValue, updateViewFilter } from 'actions/filters';
import FilterViews from './FilterViews';
import { withRouter } from 'react-router-dom';
import { ADD_MOVIE_ROUTE } from 'constants.js';

const INITIAL_STATE = {
    searchValue: ''
};

class ToolBar extends React.Component {
    state = {
        ...INITIAL_STATE
    };

    onEditSearch = (event) => {
        const target = event.target;
        if (!target) return;
        const searchValue = target.value;
        this.props.updateSearchValue(searchValue);

        event.preventDefault();
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(ADD_MOVIE_ROUTE);
    }

    render() {
        const {searchValue, viewFilter, updateViewFilter} = this.props;
        return (
            <React.Fragment>
                <FilterViews viewFilter={viewFilter} updateFilter={updateViewFilter}/>
                <SearchBar
                    onSubmit={this.onSubmit}
                    onEditSearch={this.onEditSearch}
                    searchValue={searchValue}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        viewFilter: state.movies.viewFilter,
        searchValue: state.movies.searchValue
    };
};

export default withRouter(connect(mapStateToProps, { updateSearchValue, updateViewFilter })(ToolBar));