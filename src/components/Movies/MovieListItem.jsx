import React from 'react';

const MovieListItem = ({movie}) => {
    return (
        <div className='MovieListItem col-5 card mx-2 mb-3'>
            <h5 className='card-title'>{movie.title}</h5>

            <img className='card-img-top' src={movie.srcImg} alt='Movie Cover'/>
            <div className='card-body'>
                <p className='card-text'>{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieListItem;