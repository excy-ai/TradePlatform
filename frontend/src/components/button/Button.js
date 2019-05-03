import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
  render() {
    const { style, className, value, type, disabled, onButtonClick, onClickBody } = this.props;
    return (
      <button style={style} className={`btn ${className}`} type={type} disabled={disabled}
              onClick={() => onButtonClick(onClickBody)}>
        {value}
      </button>
    );
  }
}

Button.defaultProps = {
  style: {},
  className: '',
  type: 'button',
  disabled: false,
  onButtonClick: () => {
  },
  onClickBody: '',
};

Button.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};