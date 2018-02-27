import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  render() {
    return (
      <div >
        <input
          className="TextInput"
          type="textInput"
          onInput={(input) => {
        this.props.setUsername(input.target.value);
        }}
        />
      </div>
    );
  }
}

export default TextInput;

