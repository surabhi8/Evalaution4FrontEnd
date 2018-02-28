import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import './App.css';
import QuestionHeader from '../QuestionHeader/QuestionHeader';
import MCQs from '../MCQs/MCQs';
import LeaderBoard from '../LeaderBoard/LeaderBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      screen: 0,
      questions: [],
      topPeople: [],
      score: -1,
    };
  }


  onChoosingOption=(questionid, markedoption) => {
    fetch('/recordUserResponse', {
      method: 'POST',
      body: JSON.stringify({ username: this.state.username, questionid, markedoption }),
    }).then(response => response.json()).then((responseObj) => {
      console.log(responseObj);
    });
  }
  setUsername=(username) => {
    console.log(this.state.username);
    this.setState({
      username,
    });
  }
  setPage=(page) => {
    this.setState({
      screen: page,
    });
  }
  login=() => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ userName: this.state.username }),
    }).then(response => response.json()).then(() => {
      fetch('/fetchDetails', {
        method: 'GET',
      }).then(response => response.json()).then((questions) => {
        this.setState({
          questions: questions.message,
        });
        console.log(this.state.questions);
      });
    });
  }
  calculateScore =() => {
    fetch('/score', {
      method: 'POST',
      body: JSON.stringify({ userName: this.state.username }),
    }).then(response => response.json()).then((responseObj) => {
      if (responseObj.status_code === 400) {
        alert('Attempt all questions first');
      } else if (responseObj.status_code === 200) {
        fetch('/leaderboard', {
          method: 'GET',
        }).then(response => response.json()).then((peoples) => {
          this.setState({
            topPeople: peoples.message,
            screen: 2,
            score: responseObj.message,
          });
        });
      }
    });
  }
  render() {
    if (this.state.screen === 0) {
      return (
        <div className="App">
          <Header title="Quizzy" />
          <Login setUsername={this.setUsername} setPage={this.setPage} login={this.login} />
        </div>

      );
    } else if (this.state.screen === 1) {
      return (
        <div className="App">
          <QuestionHeader title="Quizzy" userName={this.state.username} />
          <MCQs
            questions={this.state.questions}
            onChoosingOption={this.onChoosingOption}
            calculateScore={this.calculateScore}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <QuestionHeader title="Quizzy" userName={this.state.username} />
        <LeaderBoard
          topPeople={this.state.topPeople}
          score={this.state.score}
          totalQuestions={this.state.questions.length}
        />
        <button onClick={() => { this.setPage(0); }}>Play Again</button>
      </div>
    );
  }
}

export default App;
