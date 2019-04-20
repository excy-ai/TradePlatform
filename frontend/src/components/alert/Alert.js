import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
    useEffect(() => {
    }, []);
    return (
        <span className={'alert alert-warning'}>
            {props.children}
        </span>
    );
}

List.defaultProps = {};

List.propTypes = {
    children: PropTypes.node.isRequired
};
