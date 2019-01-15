import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
import { AddMovieView } from 'components/Movies';
import NotFoundPage from 'components/NotFoundPage';
import ScrollToTop from 'components/ScrollToTop';
import {ADD_MOVIE_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE} from 'constants.js';
import LoginScreen from 'components/LoginScreen';
import SignUpScreen from 'components/SignUpScreen';

export default() => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route path={HOMEPAGE_ROUTE} component={LandingPage} exact={true} />
                <Route path={ADD_MOVIE_ROUTE} component={AddMovieView}/>
                <Route path={LOGIN_ROUTE} component={LoginScreen}/>
                <Route path={SIGN_UP_ROUTE} component={SignUpScreen}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);