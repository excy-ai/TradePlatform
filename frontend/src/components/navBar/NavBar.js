import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

export default class NavBar extends React.Component {
    renderLinks = () => {
        return this.props.data.map((item) => {
            return <div key={item.link}>
                <NavLink exact to={item.link}>
                    <input className="btn btn-primary mb-2" value={item.value} readOnly/>
                </NavLink>
            </div>;
        })
    };

    render() {
        return (
            <div className="card-header">
                {this.renderLinks()}
            </div>
        );
    }
}


NavBar.defaultProps = {
    data:[],
};

NavBar.propTypes = {
    data: PropTypes.array
};