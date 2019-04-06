import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

export default class NavBar extends React.Component {
    // Why no to place it in 'render' function of your component?
    // --mrurenko 2019-04-06
    renderLinks = () => {
        return this.props.data.map((item) => {
            return <div key={item.link}>
                <NavLink exact to={item.link}>
                    {/* 1. You should extract this into a component */}
                    {/* 2. Why it is an input but not a button? */}
                    {/* --mrurenko 2019-04-06 */}
                    <input className="btn btn-primary mb-2" value={item.value} readOnly/>
                </NavLink>
            </div>;
        })
    };

    render() {
        // I think here we could use 'Card' component or smth.
        // --mrurenko 2019-04-06
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
