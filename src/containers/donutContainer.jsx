import React, {
  Component
} from 'react';

import * as d3 from "d3";
import {
  connect
} from 'react-redux';
import Pie from './Pie';

const initialState = {
  metricas: {
    categories: [{
      "displayName": "home",
      "name": "home",
      "score": 10
    }, {
      "displayName": "clothes",
      "name": "clothes",
      "score": 11.25
    }, {
      "displayName": "food",
      "name": "food",
      "score": 11.25
    }, {
      "displayName": "health",
      "name": "health",
      "score": 11.25
    }, {

      "displayName": "house",
      "name": "house",
      "score": 11.25
    }, {

      "displayName": "Education",
      "name": "Education",
      "score": 11.25
    }, {

      "displayName": "Entretainament",
      "name": "Entretainament",
      "score": 11.25
    }, {

      "displayName": "Other",
      "name": "Other",
      "score": 11.25
    }, {

      "displayName": "transport",
      "name": "transport",
      "score": 11.25
    }]
  }
};

class DonutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
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
    let width = 740,
      height = 400,
      radius = Math.min(width, height) / 2;
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    // Centers the pie chart
    let x = width / 2;
    let data = this.state.metricas.categories;
    let y = height / 2 + 90;

    let innerRadius = radius * .35;
    let outerRadius = radius;
    let labelRadius = radius * 1.05;
    let cornerRadius = 2;

    let padAngle = 0;

    const pie = d3.pie();

    const arc = d3.arc()
      .innerRadius(innerRadius * 1.35)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);

    const outerArc = d3.arc()
      .innerRadius(labelRadius)
      .outerRadius(labelRadius);

    return <div className='donutchart'>
            <svg width="100%" height="600px">

            <Pie x={x} y={y}
                  radius={radius}
                  outerArc={outerArc}
                  arc={arc}
                  pie={pie}
                  innerRadius={innerRadius}
                  outerRadius={outerRadius}
                  labelRadius={labelRadius}
                  cornerRadius={cornerRadius}
                  padAngle={padAngle}
                  data={data}
              />

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
