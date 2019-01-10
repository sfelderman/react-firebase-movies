import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
import { AddMovieView } from 'components/Movies';
import NotFoundPage from 'components/NotFoundPage';
import ScrollToTop from 'components/ScrollToTop';
import {ADD_MOVIE_ROUTE, SIGN_IN_ROUTE} from 'constants.js';
// import SignInScreen from './components/SignInScreen';

export default() => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route path='/' component={LandingPage} exact={true} />
                <Route path={`/${ADD_MOVIE_ROUTE}`} component={AddMovieView}/>
                {/* <Route path={`/${SIGN_IN_ROUTE}`} component={SignInScreen}/> */}
                <Route component={NotFoundPage}/>
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);