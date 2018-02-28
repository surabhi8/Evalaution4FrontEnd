import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';


class RadioButton extends Component {
  render() {
    console.log(this.props.choice);
    return (
      <div className="RadioButton">
        <input type="radio" value={this.props.choice} name={this.props.id} />{this.props.choice}
      </div>
    );
  }
}

RadioButton.propTypes = {
  choice: PropTypes.string.isRequired,

};
export default RadioButton;
