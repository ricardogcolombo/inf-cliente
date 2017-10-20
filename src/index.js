import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

import I18n from 'redux-i18n'
import {
    Provider
} from 'react-redux';

// store
import store from './store';
// routing
//
import {
    translations
} from './locales/i18n'
import {
    Router,
    Switch,
    Route
} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
            <I18n translations={translations} initialLang='es'>
            <Router history={history}>
                    <App/>
            </Router>
          </I18n>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
