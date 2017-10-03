import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

import {
    Provider
} from 'react-redux';


// store
import Store from './store';
// routing
import {
    Router,
    Switch,
    Route
} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={Store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
