import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
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
