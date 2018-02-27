import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-Heading">{this.props.title}</header>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
