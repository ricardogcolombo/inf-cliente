import React, {
    Component
} from 'react';

import * as d3 from "d3";

class Label extends Component {
    onRef(ref) {
        this.text = ref;
        this.translate(this.props.value)
    }
    translate(d) {
        let {
            outerRadius,
            radius
        } = this.props;

        this.text = d;
        var interpolate = d3.interpolate(this.text, d);
        this.text = interpolate(0);
        return function(t) {
            debugger;
            var d2 = interpolate(t);
            var pos = outerRadius.centroid(d2);
            pos[0] = radius * (this.midAngle(d2) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
        }
    }

    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    render() {
        let {
            value,
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

        return ( < text ref = {
                this.onRef.bind(this)
            }
            dy = '.35em'
            className = 'labelsForChart' > {
                value.data.displayName
            } < /text>
        );
    }
}

export default Label;
