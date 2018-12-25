import { FETCH_MOVIES } from 'actions/movies-actions'

export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload;
    	default:
      		return state;
  	}
};