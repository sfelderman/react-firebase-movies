export const ADD_ALL_GENRES = 'ADD_ALL_GENRES';

export const addAllGenres = payload => {
    return {
        type: ADD_ALL_GENRES,
        payload
    };
};