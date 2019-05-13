import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function ListItem(props) {
  return (
    <li className={`list-group-item inv_item`}>
      {props.children}
    </li>
  );
}

ListItem.defaultProps = {
  style: {},
  className: '',
};

ListItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
