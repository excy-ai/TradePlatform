import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
  // Don't think that className should be a property. It should be calculated and set here.
  // --mrurenko 2019-05-10
  return (
    <ul className={props.className}>
      {props.children}
    </ul>
  );
}

List.defaultProps = {
  className: '',
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
