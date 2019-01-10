import { auth } from 'config/firebase';


export const CHANGE_LOGIN_STATE = 'CHANGE_LOGIN_STATE';

export const changeLoginState = (payload) => {
    return {
        type: CHANGE_LOGIN_STATE,
        payload
    };
};

export const checkAndUpdateAuthStatus = () => async dispatch => {
    return auth.onAuthStateChanged((user) => {
        // if user isn't null then we logged in
        if (user) {
          // login
          console.log('firebase logged in', user);
          dispatch(changeLoginState(true))
        } else {
          // logout
          console.log('firebase not logged in');
          dispatch(changeLoginState(false))
        }
    });

};