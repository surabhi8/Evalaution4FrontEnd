import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div >
        <button
          className="Button"
          onClick={() => {
        this.props.login();
        this.props.setPage(1);
        }}
        >
          <span className="Button-text"><strong>Login</strong></span>
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  login: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
export default Button;
