import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { addMovie, searchMovie } from 'actions/movies-actions';

const INITIAL_STATE = {
    searchValue: ''
}

class AddMovieView extends React.Component {
    state = {
        ...INITIAL_STATE
    }

    onEditField = (event) => {
        const target = event.target;
        if (!target) return;
        const field = target.name;

        this.setState({ [field]: target.value })
        event.preventDefault();
    }

    onSearch = (event) => {
        event.preventDefault();
        const { searchValue } = this.state;
        searchMovie(searchValue)
        .then((results) => {
            this.setState({
                results,
                displayResults: true
            });
        })
    }

    clickMovie = (event, index) => {
        event.preventDefault();

        const {addMovie, history} = this.props;
        const {results} = this.state;
        const movie = results[index];

        const {
            title,
            overview,
            poster_path,
            backdrop_path
        } = movie;

        addMovie({
            title,
            overview,
            srcImg: poster_path || backdrop_path
        }).then((res) => {
            this.setState(INITIAL_STATE);
            history.push('/')
        })
    }

    render() {
        const {displayResults, results, searchValue} = this.state;
        return (
            <div className='container'>
                <div className='row justify-content-start mt-3'>
                    <div className='col-2'>
                        <Link className='btn btn-success float-left' to='/'>Go Back</Link>
                    </div>
                    <div className='col-8'>
                        <h2 className='text-center'>Add Movie View</h2>
                    </div>
                </div>

                <form onSubmit={this.onSearch}>
                    <div className='form-group'>
                        <label>Movie Title</label>
                        <input
                            type='text'
                            className='form-control'
                            name='searchValue'
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
                        { results.slice(0,10).map((movie, index) =>
                            <div onClick={(e) => this.clickMovie(e, index)} className='list-group-item card' key={movie.id}>
                                <h5 className='card-title'>{movie.title}</h5>

                                <div className='card-body'>
                                    <p className='card-text'>{movie.overview}</p>
                                </div>
                            </div>
                        )

                        }
                    </ul>}
            </div>
        )
    }
}

export default withRouter(connect(null, {addMovie})(AddMovieView));