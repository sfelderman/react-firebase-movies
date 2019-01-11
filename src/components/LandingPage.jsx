import React from 'react';
import {auth, uiConfig} from 'config/firebase';
import {connect} from 'react-redux';
import MovieHomePage from './MovieHomePage';
import SignInScreen from './SignInScreen';
import {signOut} from 'actions/user-actions';

class LandingPage extends React.Component {
	render() {
		return (
            <React.Fragment>
            { this.props.loggedIn ?
                <MovieHomePage signOut={this.props.signOut}/>
                : <SignInScreen auth={auth} uiConfig={uiConfig} />
            }
            </React.Fragment>
        );
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.user.loggedIn
	};
};

export default connect(mapStateToProps, {signOut})(LandingPage);