import {
    CHANGE_AUTH_STATUS,
    PENDING
 } from 'actions/user-actions';

export const INITIAL_STATE = {
    authStatus: PENDING
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_AUTH_STATUS:
            return {
                ...state,
                authStatus: action.payload
            };
    	default:
      		return state;
  	}
};