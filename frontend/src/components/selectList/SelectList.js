import React from 'react';
import PropTypes from 'prop-types';

export default function SelectList(props) {
  return (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        <label className="input-group-text">{props.listLabel}</label>
      </div>
      <select
        className={'custom-select'}
        name={props.listName}
        value={props.currentValue}
        onChange={props.onChange}
      >
        {props.list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

SelectList.defaultProps = {
  listName: '',
  currentValue: '',
  listLabel: '',
  list: [],
};

SelectList.propTypes = {
  listName: PropTypes.string,
  list: PropTypes.array,
  currentValue: PropTypes.string,
  listLabel: PropTypes.string,
};
