import { combineReducers } from 'redux';

import movies from './movies-reducer';
import genres from './genres-reducer';
import user from './user-reducer';

export default combineReducers({
    movies,
    genres,
    user
});