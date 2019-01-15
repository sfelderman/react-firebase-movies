import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth, uiConfig} from 'config/firebase';
import { connect } from 'react-redux';
import { LOGGED_IN, signInWithEmailAndPassword } from 'actions/user-actions';
import { Redirect, Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE, SIGN_UP_ROUTE } from 'constants.js';

class SignInScreen extends React.Component {
	state = {
		email: '',
		password: ''
	}

	onEditField = (event) => {
		const target = event.target;
		if (!target) return;
		this.setState({
			[target.name]: target.value
		});
	}

	onSubmit = (event) => {
		const {email, password} = this.state;
		const {signInWithEmailAndPassword} = this.props;
		event.preventDefault();

		signInWithEmailAndPassword(email, password)
		.catch((error) => {
			// Handle Errors here.
			console.error(error.errorMessage);
		});
	}

	render() {
		const {email, password} = this.state;
		const {authStatus} = this.props;

		if (authStatus === LOGGED_IN)
			return <Redirect to={HOMEPAGE_ROUTE}/>;

		return (
			<div className='container'>
				<h1 className='text-center'>Welcome to the Movie App</h1>
				<br/>
				<div className='row justify-content-center'>
					<h3 >Sign in With Email and Password</h3>
						<form className='container row justify-content-center' onSubmit={this.onSubmit}>
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
							<div className='form-inline col-8 '>
								<Link className='col-auto btn btn-info' to={SIGN_UP_ROUTE}>Sign-Up</Link>
								<div className='col'/>
								<button className='col-auto btn btn-primary'>Login</button>
							</div>
						</form>
				</div>
				<br/>
				<p className='text-center'>Or use an alternative method</p>
				<div className='row justify-content-center'>
					<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
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

export default connect(mapStateToProps, {signInWithEmailAndPassword})(SignInScreen);