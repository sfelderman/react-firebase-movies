import { FETCH_MOVIES, CLEAR_MOVIES } from 'actions/movies-actions';
import {
    applyFilter,
    UPDATE_VIEW_FILTER,
    UPDATE_SEARCH_VALUE,
    VIEW_ALL
 } from 'actions/filters';

export const INITIAL_STATE = {
    allMovies: [],
    filteredList: [],
    viewFilter: VIEW_ALL,
    searchValue: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLEAR_MOVIES:
            return {
                ...INITIAL_STATE
            };
        case FETCH_MOVIES:
            const allMovies = [];
            Object.entries(action.payload).forEach(([id, movie]) => {
                allMovies.push({
                    id,
                    ...movie
                });
            });
            return {
                ...state,
                allMovies,
                filteredList: applyFilter(allMovies, state.viewFilter, state.searchValue)
            };
        case UPDATE_VIEW_FILTER:
            const viewFilter = action.payload;
            return {
                ...state,
                filteredList: applyFilter(state.allMovies, viewFilter, state.searchValue),
                viewFilter
            };
        case UPDATE_SEARCH_VALUE:
            const searchValue = action.payload;
            return {
                ...state,
                filteredList: applyFilter(state.allMovies, state.viewFilter, searchValue),
                searchValue
            };
    	default:
      		return state;
  	}
};