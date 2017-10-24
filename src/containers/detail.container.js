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
import '../styles/Details.css';

// store
import store from '../store';

// containers
import SliderContainer from "./slider.container";
import Footer from './footer.container';
import TabContainer from './tab.container.js';

class Detailcontainer extends Component {
    render() {
        return (
            <div className="detail">
            <SliderContainer />
            <TabContainer/ >
            <Footer className='footerDetails'/>
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps) {
    return {
        metricas: state.metricas
    };
}

Detailcontainer.contextTypes = {
    t: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Detailcontainer);
