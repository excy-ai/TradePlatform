import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

export default function NavBar(props) {
    const linkStyle = {
        display: 'inline-block',
        margin: '0 8px 0 0'
    };
    return (
        <div className="card-header">
            {props.data.map((item) => {
                return <div key={item.link} style={linkStyle}>
                    <NavLink exact to={item.link}>
                        <input className="btn btn-primary mb-2" value={item.value} readOnly/>
                    </NavLink>
                </div>;
            })}
        </div>
    );
}


NavBar.defaultProps = {
    data: [],
};

NavBar.propTypes = {
    data: PropTypes.array
};
