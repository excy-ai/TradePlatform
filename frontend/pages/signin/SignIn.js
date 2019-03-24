import React from 'react';
import {NavLink} from "react-router-dom";

import './style.css';

export default class SignIn extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-header">
                    <NavLink exact to={'/'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Sign Up"/>
                    </NavLink>
                    <NavLink exact to={'/me'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Me"/>
                    </NavLink>
                </div>
                <form id="signin" name="signin" method="post" action="/api/auth/signin">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control text" name="email" type="email"/>
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type="password"/>
                    <input className="btn btn-danger" type="submit" value="Sign In"/>
                </form>
            </React.Fragment>
        );
    };
};
