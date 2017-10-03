import * as actions from '../actions/metricas-types'

const metricasReducer = function(state = {}, action) {
    switch (action.type) {
        case actions.GET_METRICAS_SUCCESS:
            return Object.assign({}, state, action.metricas);

        default:
            return state;
    }
}
export default metricasReducer;
