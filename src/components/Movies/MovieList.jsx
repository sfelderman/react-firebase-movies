import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import { deleteMovie, toggleWatched } from 'actions/movies-actions';
import 'styles/movieList.css';

const MovieList = ({movies, deleteMovie, toggleWatched}) => {
    return (
        <div className='MovieList container'>
            <div className='row mt-3 justify-content-center'>
                {
                    movies.map(movie =>
                        <MovieListItem key={movie.id} movie={movie} deleteMovie={deleteMovie} toggleWatched={toggleWatched} />
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies.filteredList
    };
};

export default connect(mapStateToProps, { deleteMovie, toggleWatched })(MovieList);