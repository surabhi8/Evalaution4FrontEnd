import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MCQs.css';
import Question from '../Question/Question';

class MCQs extends Component {
  render() {
    return (
      <div className="MCQs">
        {this.props.questions.map((question, index) => (
          <Question question={question} index={index} />))}
      </div>
    );
  }
}

MCQs.propTypes = {
  questions: PropTypes.arrayOf().isRequired,

};
export default MCQs;
