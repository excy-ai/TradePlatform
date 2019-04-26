import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  useEffect(() => {
  }, []);
  return (
    <li className={`list-group-item ${props.className}`}>
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
