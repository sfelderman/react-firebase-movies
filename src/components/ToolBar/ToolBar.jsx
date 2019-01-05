import React from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import { updateCustomFilter, updateViewFilter } from 'actions/filters';
import FilterViews from './FilterViews';

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
        this.props.updateCustomFilter(searchValue);

        event.preventDefault();
        this.setState({ searchValue });

    }

    render() {
        const {searchValue, viewFilter, updateViewFilter} = this.props;
        return (
            <React.Fragment>
                <FilterViews viewFilter={viewFilter} updateFilter={updateViewFilter}/>
                <SearchBar
                    onEditSearch={this.onEditSearch}
                    searchValue={searchValue}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        viewFilter: state.movies.viewFilter
    };
};

export default connect(mapStateToProps, { updateCustomFilter, updateViewFilter })(ToolBar);