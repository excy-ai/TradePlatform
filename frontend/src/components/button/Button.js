import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

// Could it be a functional component?
// --mrurenko 2019-05-10
export default class Button extends React.Component {
  render() {
    // Why do you need this two-level handler 'onButtonClick(onClickBody)' ? 
    // --mrurenko 2019-05-10
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
  value: '',
  type: 'button',
  disabled: false,
  onButtonClick: () => {
  },
  onClickBody: '',
};

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
