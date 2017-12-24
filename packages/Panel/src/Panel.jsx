import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

const Panel = props => (
  <div className="react-auth0 shadow">
    {props.children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
