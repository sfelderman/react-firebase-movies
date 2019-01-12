
import { usersRef } from 'config/firebase';
import fetchWrapper from 'util/fetchWrapper';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';

export let unsubscribeSnapshotListener;
let userMovies = null;

export const addMovie = payload => async dispatch => {
    return userMovies.doc(payload.title).set({
        ...payload
    }).then(function(docRef) {
        return docRef;
    }).catch(function(error) {
        console.error('Error adding document: ', error);
    });
};

export const deleteMovie = payload => async dispatch => {
	return userMovies.doc(payload.id).delete().then(function() {
        console.log('Document successfully deleted!');
        if (payload.callback) {
            payload.callback();
        }
    }).catch(error => {
        console.error('Error removing document: ', error);
    });
};

export const toggleWatched = payload => async dispatch => {
    return userMovies.doc(payload.id).update({
        watched: !(payload.watched || false)
    }).catch(error => {
        console.error('Error toggling watched status', error);
    });

};

export const fetchMovies = (uid) => async dispatch => {
    userMovies = usersRef.doc(uid).collection('movies');

    unsubscribeSnapshotListener = usersRef.doc(uid).collection('movies').onSnapshot((subCollectionSnapshot) => {
        let movies = {};
        subCollectionSnapshot.forEach(function(doc) {
            movies[doc.id] = doc.data();
        });
        dispatch({
            type: FETCH_MOVIES,
            payload: movies
        });
    });
    return unsubscribeSnapshotListener;
};

export const clearMovies = () => async dispatch => {
    dispatch({
        type: CLEAR_MOVIES
    });
};

export const searchExternalMovie = movieTitle => {
    return fetchWrapper(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${movieTitle}`)
    .then( res => {
        return res.results;
    }).catch( err => {
        console.error(err);
    });
};