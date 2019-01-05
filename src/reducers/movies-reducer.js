import { FETCH_MOVIES } from 'actions/movies-actions';
import {
    applyFilter,
    UPDATE_VIEW_FILTER,
    UPDATE_CUSTOM_FILTER,
    VIEW_ALL
 } from 'actions/filters';

export const INITIAL_STATE = {
    allMovies: [],
    filteredList: [],
    viewFilter: VIEW_ALL,
    customFilter: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
                filteredList: applyFilter(allMovies, state.viewFilter, state.customFilter)
            };
        case UPDATE_VIEW_FILTER:
            const viewFilter = action.payload;
            return {
                ...state,
                filteredList: applyFilter(state.allMovies, viewFilter, state.customFilter),
                viewFilter
            };
        case UPDATE_CUSTOM_FILTER:
            const customFilter = action.payload;
            return {
                ...state,
                filteredList: applyFilter(state.allMovies, state.viewFilter, customFilter),
                customFilter
            };
    	default:
      		return state;
  	}
};