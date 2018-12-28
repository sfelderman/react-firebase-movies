import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import { deleteMovie } from 'actions/movies-actions'
import {Link} from 'react-router-dom';
import 'styles/movieList.css';
class MovieList extends Component {
    state = {
    };

    render() {
        const {deleteMovie} = this.props;
        return (
            <div className='MovieList container'>
                <div className='row justify-content-end mt-3'>
                    <div className='col-2'>
                    </div>
                    <div className='col-8'>
                        <h2 className='text-center'>Your Movies</h2>
                    </div>
                    <div className='col-1'>
                        <Link className='btn btn-success float-left' to='AddMovie'>Add Movie</Link>
                    </div>
                    <div className='col-1'></div>
                </div>

                <div className='row mt-3 justify-content-center'>
                    {
                        Object.entries(this.props.movies).map(([id, movie]) =>
                            <MovieListItem key={id} id={id} movie={movie} deleteMovie={deleteMovie} />
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps, { deleteMovie })(MovieList);