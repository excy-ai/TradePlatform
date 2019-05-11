import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  useEffect(() => {
  }, []);
  const style = {
    padding: '0',
    border: 'none',
  };
  // Don't think that className should be a property. It should be calculated and set here.
  // --mrurenko 2019-05-10
  return (
    <li className={`list-group-item ${props.className}`} style={style}>
      {props.children}
    </li>
  );
}

ListItem.defaultProps = {
  className: '',
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
