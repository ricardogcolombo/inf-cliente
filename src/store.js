import {
    createStore,
    applyMiddleware
} from 'redux';
import reducers from './reducers';

import thunk from 'redux-thunk';

import i18n from './locales/i18n.js';
import { loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
const store = createStore(reducers,
    applyMiddleware(thunk)
);

syncTranslationWithStore(store)
store.dispatch(loadTranslations(i18n));
store.dispatch(setLocale('es'));

export default store;
