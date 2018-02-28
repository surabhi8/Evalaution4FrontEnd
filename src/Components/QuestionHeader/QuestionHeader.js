import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionHeader.css';

class QuestionHeader extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-Heading">{this.props.title} <span className="QuestionHeader-welcome">Hello {this.props.userName}</span></header>
      </div>
    );
  }
}
QuestionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
export default QuestionHeader;
