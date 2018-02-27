import React, { Component } from 'react';
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

export default Button;
