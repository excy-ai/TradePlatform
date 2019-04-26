import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
  useEffect(() => {
  }, []);
  return (
    <span className={`alert alert-warning ${props.className}`}>
            {props.children}
        </span>
  );
}

List.defaultProps = {
  className: '',
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
