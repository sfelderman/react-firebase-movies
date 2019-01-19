import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth, uiConfig} from 'config/firebase';
import { connect } from 'react-redux';
import { LOGGED_IN, signInWithEmailAndPassword } from 'actions/user-actions';
import { Redirect, Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE, SIGN_UP_ROUTE } from 'constants.js';
import {Container, Button, Header, Form} from 'semantic-ui-react';

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
			<Container>
				<br/>
				<Header as='h1' size='huge' textAlign='center'>Welcome to the Movie App</Header>
				<br/>
				<Header as='h3'textAlign='center' >Sign in With Email and Password</Header>

				<Form onSubmit={this.onSubmit}>
					<Form.Input
						type='email'
						value={email}
						name='email'
						onChange={this.onEditField}
						label='Email'
						placeholder='Enter your email'
						required
						autoFocus
					/>
					<Form.Input
						type='password'
						value={password}
						name='password'
						onChange={this.onEditField}
						label='Password'
						placeholder='Enter your password'
						required
					/>
					<Button.Group>
						<Button positive>Login</Button>
						<Button.Or />
						<Button >
							<Link to={SIGN_UP_ROUTE}>Create a New Account</Link>
						</Button>
					</Button.Group>
				</Form>
				<br/>
				<Header textAlign='center'>Or use an alternative method</Header>
				<br />
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authStatus: state.user.authStatus
	};
};

export default connect(mapStateToProps, {signInWithEmailAndPassword})(SignInScreen);