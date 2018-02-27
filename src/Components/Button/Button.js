import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div >
        <button className="Button">
          <strong>Login</strong>
        </button>
      </div>
    );
  }
}

export default Button;
