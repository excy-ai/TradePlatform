import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { style, className, value, type, disabled, onButtonClick } = props;
  return <button
    style={style}
    className={`btn ${className}`}
    type={type}
    disabled={disabled}
    onClick={() => onButtonClick()}>
    {value}
  </button>;
}

Button.defaultProps = {
  style: {},
  className: '',
  value: '',
  type: 'button',
  disabled: false,
  onButtonClick: () => {
  },
};

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
