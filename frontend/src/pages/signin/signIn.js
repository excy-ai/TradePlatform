import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import authenticate from '../../actions/auth/authenticate';

import './style.css';

class SignIn extends React.Component {
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
        this.props.authenticate(this.state);
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
                    id="signin" name="signin">
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
}

const mapStateToProps = (state) => ({
    // propName: state.reducerName.propName
});

const mapDispatchToProps = (dispatch) => ({
    authenticate: bindActionCreators(authenticate, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);