import axios from 'axios';

import store from '../store';

import {
    getMetricasSuccess
} from '../actions/metricas-actions';

// import {
    // hideLoadIndicator
// } from '../actions/loadIndicator-actions';

/**
 * Get all users
 */
export function getMetricas(id) {
    //TODO Call backend
    let dataset = {
        categories: [{
            "displayName": "home",
            "name": "home",
            "score": 33
        }, {
            "displayName": "clothes",
            "name": "clothes",
            "score": 9
        }, {
            "displayName": "food",
            "name": "food",
            "score": 9
        }, {
            "displayName": "health",
            "name": "health",
            "score": 9
        }, {

            "displayName": "house",
            "name": "house",
            "score": 9
        }, {

            "displayName": "Education",
            "name": "education",
            "score": 9
        }, {

            "displayName": "Entretainament",
            "name": "entretainament",
            "score": 9
        }, {

            "displayName": "Other",
            "name": "other",
            "score": 9
        }, {

            "displayName": "transport",
            "name": "transport",
            "score": 9
        }]
    }
    store.dispatch(getMetricasSuccess(dataset))
}
