import {
    combineReducers
} from 'redux';
import {
    i18nReducer
} from 'react-redux-i18n';
import metricasReducer from './metricas-reducer'
const rootReducer = combineReducers({
    i18n:i18nReducer,
    metricas:metricasReducer
});

export default rootReducer;
