import { auth } from 'config/firebase';
import { fetchMovies, unsubscribeSnapshotListener, clearMovies } from 'actions/movies-actions';

export const CHANGE_AUTH_STATUS = 'CHANGE_AUTH_STATUS';
export const PENDING = 'Pending';
export const LOGGED_IN = 'Logged In';
export const LOGGED_OUT = 'Logged Out';

export const changeLoginState = (payload) => {
    return {
        type: CHANGE_AUTH_STATUS,
        payload
    };
};

export const checkAndUpdateAuthStatus = () => async dispatch => {
    return auth.onAuthStateChanged((user) => {
        // if user isn't null then we logged in
        if (user) {
          // login
            console.log('Logged in:', user);
            dispatch(changeLoginState(LOGGED_IN));
            dispatch(fetchMovies(user.uid)); // Once logged in fetch movies

        } else {
            dispatch(changeLoginState(LOGGED_OUT));
        }
    });
};

export const signOut = () => async dispatch => {
    return auth.signOut()
        .then( () => {
          console.log('Signed Out');
          dispatch(clearMovies());
          unsubscribeSnapshotListener();
        }, (error) => {
            console.error('Sign Out Error', error);
        });
};