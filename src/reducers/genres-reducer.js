import { ADD_ALL_GENRES } from 'actions/genres-actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ALL_GENRES:
            const genres = {};
            action.payload.genres.forEach( genreObj => {
                genres[genreObj.id] = genreObj.name;
            });
            return {
                ...genres
            };
    	default:
      		return state;
  	}
};