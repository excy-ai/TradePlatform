import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Why the name is 'List'?
// --mrurenko 2019-05-10
export default function List(props) {
  // ???
  // --mrurenko 2019-05-10
  useEffect(() => {
  }, []);
  return (
    <span style={props.style} className={`alert alert-warning ${props.className}`}>
            {props.children}
        </span>
  );
}

List.defaultProps = {
  style: {},
  className: '',
};

List.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
