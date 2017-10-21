import React, {
  Component
} from 'react';

import * as d3 from "d3";

class Label extends Component {

  midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }
  render() {

    let {
      outerArc,
      value,
      radius,
    } = this.props;

    const labelPos = outerArc.centroid(value);
    labelPos[0] = radius * (this.midAngle(value) < Math.PI ? 1 : -1);

    const linePos = outerArc.centroid(value);
    linePos[0] = radius * 0.95 * (this.midAngle(value) < Math.PI ? 1 : -1);

    const textAnchor = this.midAngle(value) < Math.PI ? 'start' : 'end';

    return (
      <g>
      < text
        dy = '.35em'
        x={labelPos[0]}
        y={labelPos[1]}
        className = 'labelsForChart' >
      { value.data.displayName }
      < /text>

      </g>
    );
  }
}

export default Label;
