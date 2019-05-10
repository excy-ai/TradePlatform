import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  useEffect(() => {
  }, []);
  const style = {
    padding: '0',
    border: 'none',
  };
  return (
    <li className={`list-group-item ${props.className}`} style={style}>
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
