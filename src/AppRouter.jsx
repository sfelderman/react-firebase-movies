import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from 'components/HomePage';
import { AddMovieView } from 'components/Movies';
import NotFoundPage from 'components/NotFoundPage';
import ScrollToTop from 'components/ScrollToTop';

export default() => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/AddMovie' component={AddMovieView}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);