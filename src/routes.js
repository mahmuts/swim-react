import 'babel-polyfill';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Swims from './components/swim/swims'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="swims" component={Swims} />
    </Route>
);