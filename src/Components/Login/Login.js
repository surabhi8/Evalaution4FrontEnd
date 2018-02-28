import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-Wrapper">
          <div className="Login-Wrapper-Left">
            <div className="Login-Welcome"><strong>Welcome</strong></div>
            <div className="Login-To"><strong>to</strong></div>
            <div className="Login-Quizzy">Quizzy!</div>
          </div>
          <div className="Login-Wrapper-Right">
            <div className="Login-Login"><strong>Login</strong></div>
            <div className="Login-Username"><strong>Username</strong></div>
            <TextInput setUsername={this.props.setUsername} />
            <Button login={this.props.login} setPage={this.props.setPage} />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,

};
export default Login;

