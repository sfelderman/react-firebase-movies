import React from 'react';
import { connect } from 'react-redux';
import { LOGGED_IN, createUserWithEmailAndPassword } from 'actions/user-actions';
import { Redirect } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from 'constants.js';
import {Container, Button, Header, Form} from 'semantic-ui-react';

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
			<Container>
				<br/>
				<Header textAlign='center' size='huge'>Sign Up With Email and Password</Header>
				<br/>
				<Form onSubmit={this.onSubmit}>
					<Form.Input
						label='Email'
						placeholder='Enter your email'
						type='email'
						name='email'
						value={email}
						onChange={this.onEditField}
						required
						autoFocus
					/>
					<Form.Input
						label='Password'
						placeholder='Enter your password'
						type='password'
						name='password'
						value={password}
						onChange={this.onEditField}
						required
					/>
					<Form.Input
						label='Retype Your Password'
						placeholder='Enter your password again'
						type='password'
						name='retypePassword'
						value={retypePassword}
						onChange={this.onEditField}
						required
					/>
					<Button positive>Sign-Up</Button>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authStatus: state.user.authStatus
	};
};

export default connect(mapStateToProps, {createUserWithEmailAndPassword})(SignInScreen);