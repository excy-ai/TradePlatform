import React from 'react';
import PropTypes from 'prop-types';

export default class FormField extends React.Component {
    render() {
        const {className, value, type, name, placeholder, onChange, label} = this.props;
        return (
            <React.Fragment>
                <label htmlFor={name}>{label}</label>
                <input
                    className={`${className}`}
                    value={value}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </React.Fragment>
        );
    }
}

FormField.defaultProps = {
    className: '',
    type: 'text',
    value: '',
    name: '',
    placeholder: '',
    onChange: () => {
    }
};

FormField.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};