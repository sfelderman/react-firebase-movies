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
          console.log('Logged in:', user);
          dispatch(changeLoginState(true));
          // user.uid is identifier
        }
    });
};

export const signOut = () => async dispatch => {
    return auth.signOut()
        .then( () => {
          console.log('Signed Out');
          dispatch(changeLoginState(false));
        }, (error) => {
            console.error('Sign Out Error', error);
        });
};