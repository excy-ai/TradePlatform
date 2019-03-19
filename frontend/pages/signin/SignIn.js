import React from 'react';

import './style.css';
import {NavLink} from "react-router-dom";

export default class SignIn extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavLink exact to={'/'}>
                    SIGNUP
                </NavLink>
                <form id="signin" name="signin" method="post" action="/api/auth/signin">
                    <label htmlFor="email">Email Address</label>
                    <input className="text" name="email" type="email"/>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"/>
                    <input className="btn" type="submit" value="Sign In"/>
                </form>
            </React.Fragment>
        );
    };
};
