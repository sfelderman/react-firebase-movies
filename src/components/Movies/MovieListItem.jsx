import React from 'react';

const IMAGE_SIZE = 500;

const MovieListItem = ({movie, deleteMovie, toggleWatched}) => {
    return (
        <div className='MovieListItem col-8 card mx-2 mb-3'>
            <div className='row'>
                <div className='col-5'>
                    <img
                        className='card-img-top'
                        src={`https://image.tmdb.org/t/p/w${IMAGE_SIZE}/${movie.srcImg}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`}
                        alt='Movie Cover'
                    />
                </div>
                <div className='col-7'>
                     <div className='card-body'>

                        <h5 className='card-header text-center'>{movie.title}</h5>
                        <p className='card-text'>{movie.overview}</p>
                        <div className='card-link'>
                            <div className='row justify-content-right my-5'>
                                <button
                                    className='btn btn-outline-danger float-right mx-3'
                                    onClick={() => deleteMovie({...movie})}>
                                    Remove
                                </button>
                                <button
                                    className={`btn btn-outline-${movie.watched ? 'info' : 'dark'} float-right mx-3`}
                                    onClick={() => toggleWatched({...movie})}>
                                    {movie.watched ? 'Watched' : 'Unwatched'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieListItem;