import React, {
  Component
} from 'react';

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
