import React, {
  Component
} from 'react';

import * as d3 from "d3";
class Slice extends Component {
  render() {
    let {
      value,
      fill,
      arc
    } = this.props;

    return (
      <g>
        <path d={arc(value)} fill={fill} />
      </g>
    );
  }
}

export default Slice;
