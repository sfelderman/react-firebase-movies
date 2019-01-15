import React from 'react';
import { connect } from 'react-redux';
import { LOGGED_IN, createUserWithEmailAndPassword } from 'actions/user-actions';
import { Redirect } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from 'constants.js';

class SignInScreen extends React.Component {
	state = {
		email: '',
        password: '',
        retypePassword: ''
	}

	onEditField = (event) => {
		const target = event.target;
		if (!target) return;
		this.setState({
			[target.name]: target.value
		});
	}

	onSubmit = (event) => {
        const {email, password, retypePassword} = this.state;
        const {createUserWithEmailAndPassword} = this.props;
        event.preventDefault();
        if (password !== retypePassword) return; // TODO deal with error
        // if email already used TODO

        createUserWithEmailAndPassword(email, password)
        .catch( error => { //TODO
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error(error);
          });
	}

	render() {
		const {email, password, retypePassword} = this.state;
		const {authStatus} = this.props;

		if (authStatus === LOGGED_IN)
			return <Redirect to={HOMEPAGE_ROUTE}/>;

		return (
			<div className='container'>
                <h1 className='text-center'>Sign Up With Email and Password</h1>
				<br/>
				<div className='row justify-content-center'>
						<form onSubmit={this.onSubmit} className='container row justify-content-center' >
							<div className='form-group col-8 '>
								<label>Email</label>
								<input
									type='email'
									className='form-control'
									value={email}
									name='email'
									onChange={this.onEditField}
									placeholder='Enter your email'
									autoFocus
									required
								/>
							</div>
							<div className='form-group col-8 '>
								<label>Password</label>
								<input
									type='password'
									className='form-control'
									value={password}
									name='password'
									onChange={this.onEditField}
									placeholder='Enter your password'
									required
								/>
							</div>
							<div className='form-group col-8 '>
								<label>Retype Your Password</label>
								<input
									type='password'
									className='form-control'
									value={retypePassword}
									name='retypePassword'
									onChange={this.onEditField}
									placeholder='Enter your password again'
									required
								/>
							</div>
                            <div className='form-group col-8'>
							    <button className='btn btn-success'>Sign-Up</button>

                            </div>

						</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authStatus: state.user.authStatus
	};
};

export default connect(mapStateToProps, {createUserWithEmailAndPassword})(SignInScreen);