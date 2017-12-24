import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const className = `react-auth0 shadow default-font-size ${this.props.className}`;
  return (
    <button
      className={className}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;