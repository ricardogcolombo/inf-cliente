import React, {
    Component
} from 'react';

import * as d3 from "d3";
import Slice from './Slice';
import Label from './LabelsForCharts';

class Pie extends Component {
    constructor(props) {
        super(props);
        // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
        this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        this.renderSlice = this.renderSlice.bind(this);
        this.renderLabel = this.renderLabel.bind(this);
    }

    renderLabel(value, i) {
        let {
            innerRadius,
            radius,
            outerRadius,
            cornerRadius,
            padAngle
        } = this.props;

        return <Label key={i}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cornerRadius={cornerRadius}
             padAngle={padAngle}
             value={value}
             radius={radius}
             label={value} />
    }

    renderSlice(value, i) {
        // We'll create this component in a minute
        let {
            innerRadius,
            radius,
            outerRadius,
            cornerRadius,
            padAngle
        } = this.props;
        return (
            <Slice key={i}
             innerRadius={innerRadius}
             outerRadius={outerRadius}
             cornerRadius={cornerRadius}
             padAngle={padAngle}
             value={value}
             radius={radius}
             label={value}
             fill={this.colorScale(i)} />
        );
    }

    render() {
        let {
            x,
            y,
            data
        } = this.props;
        // https://github.com/d3/d3/wiki/Pie-Layout
        let pie = d3.pie();

        return (
            <g>
            <g className='slices' transform={`translate(${x}, ${y})`}>
        {/* Render a slice for each data point */}
            {pie(data.map(function(d){
                return d.score;
            })).map(this.renderSlice)}
            </g>

            <g className='labels' transform={`translate(${x}, ${y})`}>
        {/* Render a slice for each data point */}
            {pie(data.map(function(d){
                return d;
            })).map(this.renderLabel)}
            </g>

            </g>
        );
    }
}
export default Pie;
