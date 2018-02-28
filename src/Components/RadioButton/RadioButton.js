import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';


class RadioButton extends Component {
  render() {
    console.log(this.props.id);
    return (
      <div className="RadioButton">
        <input
          type="radio"
          value={this.props.choice}
          name={this.props.id}
          onClick={() => {
            this.props.onChoosingOption(this.props.id, this.props.choice);
        }}
        />{this.props.choice}
      </div>
    );
  }
}

RadioButton.propTypes = {
  choice: PropTypes.string.isRequired,
  onChoosingOption: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};
export default RadioButton;
