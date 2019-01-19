import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import { deleteMovie, toggleWatched } from 'actions/movies-actions';
// import 'styles/movieList.css';
import { Container, Grid } from 'semantic-ui-react';

const MovieList = ({movies, deleteMovie, toggleWatched}) => {
    return (
        <Grid container columns={3} className='MovieList'>
            {/* <div className='row mt-3 justify-content-center'> */}
            {
                movies.map( movie =>
                    <MovieListItem key={movie.id} movie={movie} deleteMovie={deleteMovie} toggleWatched={toggleWatched} />
                )
            }
            {/* </div> */}
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies.filteredList
    };
};

export default connect(mapStateToProps, { deleteMovie, toggleWatched })(MovieList);