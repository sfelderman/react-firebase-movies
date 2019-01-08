import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers';
import reduxThunk from 'redux-thunk';
import fetchWrapper from 'util/fetchWrapper';

import { fetchMovies } from 'actions/movies-actions';
import { addAllGenres } from 'actions/genres-actions';

import AppRouter from './AppRouter';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducers,
    initialState,
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
);

store.dispatch(fetchMovies());

fetchWrapper(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
    .then( res => store.dispatch(addAllGenres(res)) )
    .catch( err => console.error('Unable to fetch genres, ' + err));

const root = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(root, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
