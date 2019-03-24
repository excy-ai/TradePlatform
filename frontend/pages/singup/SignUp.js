import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

export default class SignUp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-header">
                    <NavLink exact to={'/signin'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Sign In"/>
                    </NavLink>
                </div>

                <form id="signup" name="signup" method="post" action="/api/auth/signup">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control text" name="email" type="email"/>
                    <label htmlFor="firstName">Firstname</label>
                    <input className="form-control" name="firstName" type="text"/>
                    <label htmlFor="lastName">Lastname</label>
                    <input className="form-control" name="lastName" type="text"/>
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type="password"/>
                    <input className="btn btn-primary mb-2" type="submit" value="Sign Up"/>
                </form>
            </React.Fragment>
        );
    };
};
