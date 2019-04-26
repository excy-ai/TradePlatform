import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
  render() {
    const { className, value, type, disabled, onButtonClick, onClickBody } = this.props;
    return (
      <button className={`btn ${className}`} type={type} disabled={disabled}
              onClick={() => onButtonClick(onClickBody)}>
        {value}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  type: 'button',
  disabled: false,
  onButtonClick: () => {
  },
  onClickBody: '',
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};