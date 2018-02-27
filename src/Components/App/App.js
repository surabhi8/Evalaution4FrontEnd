import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Quizzy" />
        <Login />
      </div>
    );
  }
}

export default App;
