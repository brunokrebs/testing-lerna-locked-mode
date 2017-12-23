import React from 'react';
import './Button.css';

const Button = () => {
  const className = `react-auth0 shadow default-font-size ${this.props.className}`;
  return (
    <button
      className={className}
      onClick={this.props.onClick}
    >
      {this.props.text}
    </button>
  );
};

export default Button;
