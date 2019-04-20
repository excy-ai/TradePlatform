import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Main(props) {
    //todo: fetch user and other info here, after it check on other pages to check existence of needed info
    useEffect(() => {
    }, []);
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

List.defaultProps = {};

List.propTypes = {
    children: PropTypes.node.isRequired
};
