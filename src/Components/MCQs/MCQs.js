import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MCQs.css';
import Question from '../Question/Question';

class MCQs extends Component {
  render() {
    return (
      <div className="MCQs">
        {this.props.questions.map((question, index) => (
          <Question question={question} onChoosingOption={this.props.onChoosingOption} index={index + 1} />))}
        <button
          className="MCQs-Score"
          value="Calculate"
          onClick={() => {
            this.props.calculateScore();
        }}
        >Calculate
        </button>
      </div>
    );
  }
}

MCQs.propTypes = {
  questions: PropTypes.arrayOf().isRequired,
  onChoosingOption: PropTypes.func.isRequired,
  calculateScore: PropTypes.func.isRequired,
};
export default MCQs;
