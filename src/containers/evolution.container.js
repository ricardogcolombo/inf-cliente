import React, {
    Component
} from 'react';

import {
    PropTypes
} from 'prop-types'

import {
    connect
} from 'react-redux';

// styles
// import '../styles/Evolution.css';

// store
import store from '../store';

// containers

// 3rd party
//
class Evolution extends Component {
    render() {
        return (
            <div className="evolution">
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps) {
    return {
        metricas: state.metricas
    };
}

Evolution.contextTypes = {
    t: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Evolution);
