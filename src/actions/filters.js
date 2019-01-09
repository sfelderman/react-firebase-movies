export const UPDATE_VIEW_FILTER = 'UPDATE_VIEW_FILTER';
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const VIEW_ALL = 'VIEW_ALL';
export const VIEW_WATCHED = 'VIEW_WATCHED';
export const VIEW_UNWATCHED = 'VIEW_UNWATCHED';

export const updateSearchValue = payload => {
    return {
        type: UPDATE_SEARCH_VALUE,
        payload
    };
};

export const updateViewFilter = payload => {
    return {
        type: UPDATE_VIEW_FILTER,
        payload
    };
};

export const applyFilter = (movies, viewFilter, searchValue) => {
    const remainingMovies = viewFilter === VIEW_ALL
        ? [...movies]
        : movies.filter(movie => {
            if (viewFilter === VIEW_WATCHED)
                return movie.watched;
            else
                return !movie.watched;
    });

    if (searchValue) {
        if (searchValue.includes('#')) { //tags
            // const moviesToKeep = [...movies];
            // const searchTags = searchValue.split('#').splice(1);
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
            return remainingMovies.filter( movie => {
                // prepares the data to be searched on
                const lowercaseTitle = movie.title.toLowerCase();
                const movieKeyWords = lowercaseTitle.replace(/[:,"?/]/g,'').split(' ');// strip extra characters from words
                const searchTokens = searchValue.toLowerCase().split(' ');

                let includesAll = true;
                searchTokens.forEach( (token, index) => {
                    if (index === searchTokens.length - 1) { // last token needs only partial match
                        let partialMatch = false;
                        movieKeyWords.forEach( word => {
                            if ( word.includes(token) ) {
                                partialMatch = true;
                                return;
                            }
                        });

                        if (!partialMatch) {
                            includesAll = false;
                            return;
                        }
                    }
                    else { // others need to match words exactly
                        if (!movieKeyWords.includes(token)) { // TODO might always want partial match
                            includesAll = false;
                            return;
                        }
                    }
                });
                return includesAll;

            });
        }
    }
    return [...remainingMovies];
};