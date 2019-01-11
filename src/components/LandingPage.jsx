import React from 'react';
import {connect} from 'react-redux';
import MovieHomePage from './MovieHomePage';
import {signOut, PENDING, LOGGED_OUT} from 'actions/user-actions';
import { Redirect } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants.js';
import Spinner from 'components/Spinner';

const LandingPage = ({authStatus, signOut}) => {

    switch(authStatus) {
        case PENDING: //TODO turn this into a splash screen
            return <Spinner message={'Loading App'} />;
        case LOGGED_OUT:
            return <Redirect to={`/${LOGIN_ROUTE}`}/>;
        default: // LOGGED_IN
            return <MovieHomePage signOut={signOut}/>;
    }
};

const mapStateToProps = (state) => {
	return {
		authStatus: state.user.authStatus
	};
};

export default connect(mapStateToProps, {signOut})(LandingPage);