import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import getMe from "../../actions/me/getMe";
import switchTradeStatus from "../../actions/me/switchTradeStatus";
import {connect} from "react-redux";

function NavBar(props) {
    const linkStyle = {
        display: 'inline-block',
        margin: '0 8px 0 0'
    };
    let data = [
        {link: '/', value: 'Sign Up', auth: false}, {link: '/signin', value: 'Sign In', auth: false},
        {link: '/me', value: 'Me', auth: true}, {link: '/additem', value: 'Add Item', auth: true},
        {link: '/market', value: 'Market', auth: true}
    ];
    return (
        <div className="card-header">
            {data.map((item) => {
                if (item.auth === props.authenticated) {
                    return <div key={item.link} style={linkStyle}>
                        <NavLink exact to={item.link}>
                            <input className="btn btn-primary mb-2" value={item.value} readOnly/>
                        </NavLink>
                    </div>;
                }
            })}
        </div>
    );
}

NavBar.defaultProps = {};

NavBar.propTypes = {};


const mapStateToProps = (state) => ({
    authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    getMe: bindActionCreators(getMe, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
