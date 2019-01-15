import { auth, usersRef } from 'config/firebase';
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
            usersRef.doc(user.uid).set({
                loginStatus: LOGGED_IN,
                isAnonymous: user.isAnonymous
              },{ merge: true });
            dispatch(changeLoginState(LOGGED_IN));
            dispatch(fetchMovies(user.uid)); // Once logged in fetch movies

        } else {
            dispatch(changeLoginState(LOGGED_OUT));
        }
    });
};

export const createUserWithEmailAndPassword = (email, password) => async dispatch => {
    return auth.createUserWithEmailAndPassword(email, password);
    // .catch(function(error) {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.error(errorMessage);
    //     // ...
    // });
};

export const signInWithEmailAndPassword = (email, password) => async dispatch => {
    return auth.signInWithEmailAndPassword(email, password);
    // .catch(function(error) {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.error(errorMessage);
    //     throw error;
    // });
};

export const signOut = () => async dispatch => {
    const userId = auth.getUid();
    const currentUser = auth.currentUser;
    const isAnon = currentUser.isAnonymous;
    return auth.signOut()
        .then( () => {
          usersRef.doc(userId).set({
            loginStatus: LOGGED_OUT,
            isAnonymous: isAnon
          },{ merge: true });
          dispatch(clearMovies());
          unsubscribeSnapshotListener();
        }, (error) => {
            console.error('Sign Out Error', error);
        });
};