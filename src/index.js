import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './index.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/'>
                <IndexRoute path='user' component={Home}/>>
                <Route path='users' component={Home}>
                    <Route path=':userId' component={Detail}/>
                </Route>
                <Route path='*' component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);