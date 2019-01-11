import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
import { AddMovieView } from 'components/Movies';
import NotFoundPage from 'components/NotFoundPage';
import ScrollToTop from 'components/ScrollToTop';
import {ADD_MOVIE_ROUTE} from 'constants.js';

export default() => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route path='/' component={LandingPage} exact={true} />
                <Route path={`/${ADD_MOVIE_ROUTE}`} component={AddMovieView}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);