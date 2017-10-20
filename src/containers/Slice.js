import React, {
    Component
} from 'react';

import * as d3 from "d3";
class Slice extends Component {
    render() {
        let {
            value,
            fill,
            padAngle,
            cornerRadius,
            innerRadius = 0,
            outerRadius
        } = this.props;

        // https://github.com/d3/d3/wiki/SVG-Shapes#arc
        let arc = d3.arc()
            .innerRadius(innerRadius * 1.35)
            .outerRadius(outerRadius)
            .cornerRadius(cornerRadius)
            .padAngle(padAngle);

        return (
            <g>
                <path d={arc(value)} fill={fill} />
            </g>
        );
    }
}

export default Slice;
