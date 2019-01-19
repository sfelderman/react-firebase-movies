import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import { deleteMovie, toggleWatched } from 'actions/movies-actions';
import {Container, Card, Image, Button, Header, Form, Grid, GridColumn} from 'semantic-ui-react';

import 'styles/movieList.css';

const MovieList = ({movies, deleteMovie, toggleWatched}) => {
    return (
        <Grid className='MovieList'>
            {
                movies.map( movie =>
                    <MovieListItem key={movie.id} movie={movie} deleteMovie={deleteMovie} toggleWatched={toggleWatched} />
                )
            }
        </Grid>
        // <div className='MovieList container'>
        //     <div className='row mt-3 justify-content-center'>
        //     {
        //         movies.map( movie =>
        //             <MovieListItem key={movie.id} movie={movie} deleteMovie={deleteMovie} toggleWatched={toggleWatched} />
        //         )
        //     }
        //     </div>
        // </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies.filteredList
    };
};

export default connect(mapStateToProps, { deleteMovie, toggleWatched })(MovieList);