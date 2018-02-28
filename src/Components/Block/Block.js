import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Block.css';


class Block extends Component {
  render() {
    return (
      <div className="Block">
        <div className="Block-Name"><span>{this.props.index}</span>.<strong>{this.props.userName}</strong></div>
        <div className="Block-Score">{this.props.score}</div>
      </div>
    );
  }
}

export default Block;
