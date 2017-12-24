import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.style';

const Button = props => (
  <button
    className={props.className}
    style={styles}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
