import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { addMovie, searchExternalMovie } from 'actions/movies-actions';
import { updateSearchValue } from 'actions/filters';
import 'styles/AddMovieView.css';

const IMAGE_SIZE = 185;
class AddMovieView extends React.Component {
    state = {
        initialDisplay: true
    }

    componentDidMount() {
        const {searchValue} = this.props;
        if (searchValue) {
            this.onSearch();
        }
    }

    onEditField = (event) => {
        const target = event.target;
        if (!target) return;
       const searchValue = target.value;
        this.props.updateSearchValue(searchValue);
        event.preventDefault();
    }

    onSearch = (event) => {
        event && event.preventDefault();
        searchExternalMovie(this.props.searchValue)
        .then((results) => {
            this.setState({
                results,
                displayResults: true
            });
        });
    }

    clickMovie = (event, index) => {
        event.preventDefault();

        const {addMovie, history, genresMappingObj} = this.props;
        const {results} = this.state;
        const movie = results[index];

        const {
            title,
            overview,
            poster_path,
            backdrop_path,
            genre_ids
        } = movie;

        addMovie({
            title,
            overview,
            srcImg: poster_path || backdrop_path,
            watched: false,
            genres: [...genre_ids.map(id => genresMappingObj[id])]
        }).then((res) => {
            history.push('/');
        });
    }

    render() {
        const {displayResults, results} = this.state;
        const {searchValue} = this.props;
        return (
            <div className='container'>
                <div className='row justify-content-start mt-3'>
                    <div className='col-2'>
                        <Link className='btn btn-success float-left' to='/'>Go Back</Link>
                    </div>
                    <div className='col-8'>
                        <h2 className='text-center'>Add New Movie</h2>
                    </div>
                </div>

                <form onSubmit={this.onSearch}>
                    <div className='form-group'>
                        <label>Movie Title</label>
                        <input
                            type='text'
                            className='form-control'
                            value={searchValue}
                            onChange={this.onEditField}
                            onSubmit={this.onSearch}
                            placeholder='Enter movie title'
                            autoFocus
                            required
                        />
                    </div>
                </form>
                {displayResults && <ul className='list-group' style={{maxHeight: '500px'}}>
                        { results.slice(0,10).map((movie, index) => //TODO make this display nicer
                            <div onClick={(e) => this.clickMovie(e, index)} className='list-group-item card movie-card-button' key={movie.id}>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img
                                            className='card-img-top'
                                            src={`https://image.tmdb.org/t/p/w${IMAGE_SIZE}/${movie.poster_path || movie.backdrop_path}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`}
                                            alt='Movie Cover'
                                        />
                                    </div>

                                    <div className='col-7'>
                                        <h5 className='card-title'>{movie.title}</h5>
                                        <div className='card-body'>
                                            <p className='card-text'>{movie.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                        }
                    </ul>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.movies.searchValue,
        genresMappingObj: state.genres
    };
};
export default withRouter(connect(mapStateToProps, {updateSearchValue, addMovie})(AddMovieView));