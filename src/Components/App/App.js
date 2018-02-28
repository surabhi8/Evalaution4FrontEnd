import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import './App.css';
import QuestionHeader from '../QuestionHeader/QuestionHeader';
import MCQs from '../MCQs/MCQs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      screen: 0,
      questions: [],
    };
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
    }).then(response => response.json()).then((responseObj) => {
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
  render() {
    if (this.state.screen === 0) {
      return (<div className="App">
        <Header title="Quizzy" />
        <Login setUsername={this.setUsername} setPage={this.setPage} login={this.login} />
      </div>
      );
    } else if (this.state.screen === 1) {
      return (
        <div className="App">
          <QuestionHeader title="Quizzy" userName={this.state.username} />
          <MCQs questions={this.state.questions} />
        </div>
      );
    }
  }
}

export default App;
