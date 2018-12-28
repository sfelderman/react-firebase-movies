
import { moviesRef } from 'config/firebase';
import fetchWrapper from 'util/fetchWrapper';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const addMovie = payload => async dispatch => {
    moviesRef.add({
        ...payload
    }).then(function(docRef) {
        return docRef;
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

export const searchMovie = movieTitle => {
    return fetchWrapper(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${movieTitle}`)
    .then( res => {
        return res.results;
    }).catch( err => {
        console.error(err);
    })
};