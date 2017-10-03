import React, {
    Component
} from 'react';

import * as d3 from "d3";
class Slice extends React.Component {
    render() {
        let {
            value,
            fill,
            padAngle,
            cornerRadius,
            innerRadius = 0,
            outerRadius,
            label
        } = this.props;

        // https://github.com/d3/d3/wiki/SVG-Shapes#arc
        let arc = d3.arc()
            .innerRadius(innerRadius * 1.35)
            .outerRadius(outerRadius)
            .cornerRadius(cornerRadius)
            .padAngle(padAngle);

        function translate(x, y) {
            return `translate(${x*1.8}, ${y*1.8})`;
        }
        return (
            <g>
                <path d={arc(value)} fill={fill} />
            </g>
        );
    }
}

export default Slice;
