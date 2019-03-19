import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

export default class SignUp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavLink exact to={'/signin'}>
                    SIGNIN
                </NavLink>

                <form id="signup" name="signup" method="post" action="/api/auth/signup">
                    <label htmlFor="email">Email Address</label>
                    <input className="text" name="email" type="email"/>
                    <label htmlFor="firstName">Firstname</label>
                    <input name="firstName" type="text"/>
                    <label htmlFor="lastName">Lastname</label>
                    <input name="lastName" type="text"/>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"/>
                    <input className="btn" type="submit" value="Sign Up"/>
                </form>
            </React.Fragment>
        );
    };
};
