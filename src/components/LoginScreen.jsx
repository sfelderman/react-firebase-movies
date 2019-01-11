import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth, uiConfig} from 'config/firebase';
import { connect } from 'react-redux';
import { LOGGED_IN } from 'actions/user-actions';
import { Redirect } from 'react-router-dom';

const SignInScreen = ({authStatus}) => {
	if (authStatus === LOGGED_IN)
		return <Redirect to={'/'}/>;

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<h1 className='text-center'>Welcome to the Movie App</h1>
			</div>
			<div className='row justify-content-center'>
				<p className='text-center' >Please sign-in:</p>
			</div>
			<div className='row justify-content-center'>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		authStatus: state.user.authStatus
	};
};

export default connect(mapStateToProps)(SignInScreen);