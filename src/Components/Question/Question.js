import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';
import RadioButton from '../RadioButton/RadioButton';

class Question extends Component {
  render() {
    const options = Object.values(Object.values(this.props.question.options));
    return (
      <div className="Question">
        <div className="Question-Heading">Question {this.props.index}</div>
        <div className="Question-Main-Question">{this.props.question.question}</div>
        <div className="options">
          {
            options.map(option => (
              <RadioButton choice={option} id={this.props.question.questionId} />
            ))
            }
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.arrayOf().isRequired,
  index: PropTypes.arrayOf().isRequired,

};
export default Question;
