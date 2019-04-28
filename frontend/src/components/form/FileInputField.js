import React from 'react';
import PropTypes from 'prop-types';

export default function FileInputField(props) {
  return (
    <div className="input-group mb-2">
      <div className="custom-file">
        <input type={props.type} onChange={props.onChange} id="customFile"/>
        <label className="custom-file-label" htmlFor="customFile">
          {props.value ? props.value.substring('C:/fakepath/'.length) : props.title}
        </label>
      </div>
    </div>
  );
}


FileInputField.defaultProps = {
  value: '',
  title: '',
  type: 'text',
  onChange: () => {
  },
};

FileInputField.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
