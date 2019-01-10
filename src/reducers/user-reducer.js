import {
    CHANGE_LOGIN_STATE
 } from 'actions/user-actions';

export const INITIAL_STATE = {
    loggedIn: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATE:
            return {
                ...state,
                loggedIn: action.payload
            };
    	default:
      		return state;
  	}
};