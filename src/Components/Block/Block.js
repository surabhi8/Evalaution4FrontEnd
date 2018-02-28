import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Block.css';


class Block extends Component {
  render() {
    if (this.props.user === this.props.userName) {
      return (
        <div className="Block-User">
          <div className="Block-Name"><span className="numbering">{this.props.index}</span>.<strong>{this.props.userName}</strong></div>
          <div className="Block-Score">{this.props.score}</div>
        </div>
      );
    }
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
  user: PropTypes.string.isRequired,
};
export default Block;
