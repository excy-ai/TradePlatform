import React from 'react';
import {NavLink} from "react-router-dom";

import './style.css';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }


    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = (event) => {
        fetch('/api/auth/signin', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (!response.ok) {
                throw Error("bad");
            }
            window.location.pathname='/me';
        }).catch((err) => {
            console.error("user not authenticated");
        });
        event.preventDefault();
    };

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


                <form onSubmit={this.handleSubmit}
                    id="signin" name="signin" method="post">
                    <label htmlFor="email">Email Address</label>
                    <input value={this.state.email} onChange={this.handleEmail}
                        className="form-control text" name="email" type="email"/>

                    <label htmlFor="password">Password</label>
                    <input value={this.state.password} onChange={this.handlePassword}
                           className="form-control" name="password" type="password"/>
                    <input className="btn btn-danger" type="submit" value="Sign In"/>
                </form>
            </React.Fragment>
        );
    };
};
