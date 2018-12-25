
import { moviesRef } from 'config/firebase';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const addMovie = newMovie => async dispatch => {
	moviesRef.push().set(newMovie);
};

export const deleteMovie = movieId => async dispatch => {
	moviesRef.child(movieId).remove();
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