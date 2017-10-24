import React, {
  Component
} from 'react';
import * as d3 from "d3";

import Slice from '../components/Slice/slice.js';
import Label from './labelsChartContainer';

class Pie extends Component {
  constructor(props) {
    super(props);
    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    this.renderSlice = this.renderSlice.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
  }

  renderLabel(value, i ) {
    let {
      radius,
      arc,
      outerArc,
      data
    } = this.props;

    return <Label key={i}
            outerArc={outerArc}
             value={value}
             label = {data[i].name}
             arc={arc}
             radius={radius}
             />
  }

  renderSlice(value, i) {
    // We'll create this component in a minute
    let {
      arc
    } = this.props;
    return (
      <Slice key={i}
             arc={arc}
             value={value}
             fill={this.colorScale(i)} />
    );
  }

  render() {
    let {
      x,
      y,
      pie,
      data
    } = this.props;

    // https://github.com/d3/d3/wiki/Pie-Layout
    return (
      <g>
            <g className='slices' transform={`translate(${x}, ${y})`}>
            {/* Render a slice for each data point */}
            {pie(data.map(d =>d.score )).map(this.renderSlice)}
            </g>

            <g className='labels' transform={`translate(${x}, ${y})`}>
            {/* Render a slice for each data point */}
            {pie(data.map(d => d.score)).map(this.renderLabel)}
            </g>

            </g>
    );
  }
}
export default Pie;
