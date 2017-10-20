import {
    combineReducers
} from 'redux';
import {i18nState} from 'redux-i18n'
import metricasReducer from './metricas-reducer'

const rootReducer = combineReducers({
    i18nState,
    metricas:metricasReducer
});

export default rootReducer;
