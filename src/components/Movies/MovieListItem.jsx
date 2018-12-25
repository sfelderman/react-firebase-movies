import React from 'react';

const MovieListItem = ({id, movie, deleteMovie}) => {
    return (
        <div className='MovieListItem col-5 card mx-2 mb-3'>
            <div className='row justify-content-end'>
                <div className='col-8 justify-content-start'>
                    <h5 className='card-title'>{movie.title}</h5>
                </div>
                <div className='col-2'/>
                    <button
                        className='btn btn-md btn-danger float-right '
                        onClick={() => deleteMovie({ movieId: id })}>
                        X
                    </button>
            </div>

            <img className='card-img-top' src={movie.srcImg} alt='Movie Cover'/>
            <div className='card-body'>
                <p className='card-text'>{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieListItem;