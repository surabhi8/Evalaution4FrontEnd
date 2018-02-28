import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LeaderBoard.css';
import Block from '../Block/Block';

class LeaderBoard extends Component {
  render() {
    return (
      <div className="LeaderBoard">
        <div className="LeaderBoard-Score"><strong>Your Score</strong></div>
        <div className="LeaderBoard-UserScore"><span className="IncreaseSize">{this.props.score}</span>
        /<span className="SmallerSize">{this.props.totalQuestions}</span>
        </div>
        <div className="LeaderBoard-Heading"><strong>LeaderBoard</strong></div>
        {this.props.topPeople.map((people, index) => (
          <Block
            user={this.props.userName}
            userName={people.userName}
            score={people.score}
            index={index + 1}
          />
        ))}
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  topPeople: PropTypes.arrayOf().isRequired,
  userName: PropTypes.string.isRequired,
};

export default LeaderBoard;
