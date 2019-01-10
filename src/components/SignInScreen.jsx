import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const SignInScreen = ({ auth, uiConfig}) => {
	return (
		<div>
			<h1>My App</h1>
			<p>Please sign-in:</p>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
		</div>
	);
};

export default SignInScreen;