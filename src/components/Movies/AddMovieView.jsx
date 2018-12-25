import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { addMovie } from 'actions/movies-actions';

const INITIAL_STATE = {
    title: '',
    description: ''
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

    onSubmit = (event) => {
        const {title, description} = this.state;
        const {addMovie, history} = this.props;
        event.preventDefault();
        const thisRef = this;
        addMovie({
            movie: {
                title,
                description
            }, callback: () => {
                thisRef.setState(INITIAL_STATE);
                history.push('/')
            }
        })
    }

    render() {
        const {title, description} = this.state;
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

                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Movie Title</label>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            value={title}
                            onChange={this.onEditField}
                            onSubmit={() => {}}
                            placeholder='Enter movie title'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Movie Description</label>
                        <textarea
                            className='form-control'
                            name='description'
                            value={description}
                            onChange={this.onEditField}
                            placeholder='Enter movie description'
                            rows='3'
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, {addMovie})(AddMovieView));