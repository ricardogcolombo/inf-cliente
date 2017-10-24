import React, {
  Component
} from 'react';

import IconSvg from './IconChart'

class Label extends Component {

  midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }
  formatValue() {
    return this.props.value.data.toString() + "%";
  }
  render() {

    let {
      outerArc,
      arc,
      value,
      label,
      radius,
    } = this.props;

    const labelPos = outerArc.centroid(value);
    labelPos[0] = radius * (this.midAngle(value) < Math.PI ? 1 : -1);

    const linePos = outerArc.centroid(value);
    linePos[0] = radius * 0.95 * (this.midAngle(value) < Math.PI ? 1 : -1);

    const textAnchor = this.midAngle(value) < Math.PI ? 'start' : 'end';
    let classes = 'labelsForChart';


    let translatePosX = labelPos[0] < 0 ? labelPos[0] - 0 : labelPos[0] + 30;
    let translatePosY = labelPos[1] - 13;
    return (
      <g>
        <polyline
          opacity={.4}
          strokeWidth={2}
          stroke={'#000'}
          fill={'none'}
          points={[arc.centroid(value), outerArc.centroid(value), linePos]}
        />
      < text
        dy = '.35em'
        transform={`translate(${labelPos[0]}, ${labelPos[1]})`}
        textAnchor={textAnchor}
      className = {classes} >
      {this.formatValue()}
      < /text>
        <IconSvg iconName={label} translatePosX = {translatePosX} translatePosY={translatePosY}/>
      </g>
    );
  }
}

export default Label;
