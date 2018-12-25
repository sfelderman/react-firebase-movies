
import { moviesRef } from 'config/firebase';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const addMovie = payload => async dispatch => {
    moviesRef.add({
        ...payload.movie
    }).then(function(docRef) {
        if (payload.callback) {
            payload.callback();
        }
    }).catch(function(error) {
        console.error('Error adding document: ', error);
    });
};

export const deleteMovie = payload => async dispatch => {
	moviesRef.doc(payload.movieId).delete().then(function() {
        console.log('Document successfully deleted!');
        if (payload.callback) {
            payload.callback();
        }
    }).catch(function(error) {
        console.error('Error removing document: ', error);
    });
};

export const fetchMovies = () => async dispatch => {
    moviesRef.onSnapshot(function(querySnapshot) {
        let movies = {};
        querySnapshot.forEach(function(doc) {
            movies[doc.id] = doc.data();
        });
        dispatch({
            type: FETCH_MOVIES,
            payload: movies
        });
    });
  };