import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Block.css';


class Block extends Component {
  render() {
    return (
      <div className="Block">
        <div className="Block-Name"><span className="numbering">{this.props.index}</span>.<strong>{this.props.userName}</strong></div>
        <div className="Block-Score">{this.props.score}</div>
      </div>
    );
  }
}

Block.propTypes = {
  index: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default Block;
