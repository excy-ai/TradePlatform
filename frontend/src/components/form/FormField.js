import React from 'react';
import PropTypes from 'prop-types';

export default function FormField({ className, value, type, name, placeholder, onChange, label }) {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className={`form-control text`}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </React.Fragment>
  );
}

FormField.defaultProps = {
  className: '',
  type: 'text',
  value: '',
  label: '',
  name: '',
  placeholder: '',
  onChange: () => {
  },
};

FormField.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
