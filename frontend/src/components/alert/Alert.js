import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  return (
    <span
      style={props.style}
      className={`alert alert-warning ${props.className}`}>
      {props.children}
    </span>
  );
}

Alert.defaultProps = {
  style: {},
  className: '',
};

Alert.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
