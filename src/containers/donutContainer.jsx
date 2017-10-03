import React, {
    Component
} from 'react';

import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import Pie from './Pie';
import * as d3 from "d3";

const initialState = {
    metricas: {
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
            "name": "Education",
            "score": 9
        }, {

            "displayName": "Entretainament",
            "name": "Entretainament",
            "score": 9
        }, {

            "displayName": "Other",
            "name": "Other",
            "score": 9
        }, {

            "displayName": "transport",
            "name": "transport",
            "score": 9
        }]
    }
};

class DonutContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            metricas: nextProps.metricas
        })
    }

    componentDidMount() {
        this.state = initialState;
    }

    render() {

        // https://github.com/digidem/react-dimensions
        let width = 640,
            height = 400,
            radius = Math.min(width, height) / 2;

        // This sets the radius of the pie chart to fit within
        // the current window size, with some additional padding
        // Centers the pie chart
        let x = width / 2;
        let data = [5, 2, 7, 1, 1, 3, 4, 9]
        let y = height / 2+90;

        return <div className='donutchart'> 
            <svg width="100%" height="800px">
            <Pie x={x} y={y} 
             radius={radius}
             innerRadius={radius * .35}
             outerRadius={radius}
             cornerRadius={7}
             padAngle={.02}
        
        data={data} />
             </svg>
            </div>
    }
}
const mapStateToProps = function(state, ownProps) {
    return {
        metricas: state.metricas

    };
}
export default connect(mapStateToProps)(DonutContainer);
