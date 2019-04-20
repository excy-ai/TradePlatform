import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
    useEffect(() => {
    }, []);
    return (
        <li className='list-group-item mb-1'>
            {props.children}
        </li>
    );
}

ListItem.defaultProps = {
    className: ''
};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
