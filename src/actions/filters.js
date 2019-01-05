export const UPDATE_VIEW_FILTER = 'UPDATE_VIEW_FILTER';
export const UPDATE_CUSTOM_FILTER = 'UPDATE_CUSTOM_FILTER';
export const VIEW_ALL = 'VIEW_ALL';
export const VIEW_WATCHED = 'VIEW_WATCHED';
export const VIEW_UNWATCHED = 'VIEW_UNWATCHED';

export const updateCustomFilter = payload => {
    return {
        type: UPDATE_CUSTOM_FILTER,
        payload
    };
};

export const updateViewFilter = payload => {
    return {
        type: UPDATE_VIEW_FILTER,
        payload
    };
};

export const applyFilter = (movies, viewFilter, customFilter) => {
    const remainingMovies = viewFilter === VIEW_ALL
        ? [...movies]
        : movies.filter(movie => {
            if (viewFilter === VIEW_WATCHED)
                return movie.watched;
            else
                return !movie.watched;
    });

    if (customFilter) {
        if (customFilter.includes('#')) { //tags
            // const moviesToKeep = [...movies];
            // const searchTags = customFilter.split('#').splice(1);
            // if (!searchTags[0].length) return [...movies];
            // return moviesToKeep.filter(movie => {
            //     let valid = false;
            //     debugger;
            //     searchTags.forEach(filterTag => {
            //         if (movie.tags.contains(filterTag)) {
            //             valid = true;
            //             return valid;
            //         }
            //     });
            //     console.log('a')
            //     return valid;
            // });
            return [...remainingMovies];
        } else { //lowercase search by title
            return remainingMovies.filter(movie => movie.title.toLowerCase().includes( customFilter.toLowerCase() ));
        }
    }
    return [...remainingMovies];
};