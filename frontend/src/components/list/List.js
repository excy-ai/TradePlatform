import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
    useEffect(() => {
    }, []);
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    );
}

List.defaultProps = {
    className: ''
};

List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
