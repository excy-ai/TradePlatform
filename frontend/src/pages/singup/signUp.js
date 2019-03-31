import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import register from "../../actions/auth/register";

import './style.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        };
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    };

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = (event) => {
        this.props.register(this.state).then((response)=>{
            if(response.ok){
                window.location.pathname='/signin';
            }
        });;
        event.preventDefault();
    };

    render() {
        return (
            <React.Fragment>
                <div className="card-header">
                    <NavLink exact to={'/signin'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Sign In"/>
                    </NavLink>
                </div>

                <form onSubmit={this.handleSubmit}
                      id="signup" name="signup">

                    <label htmlFor="email">Email Address</label>
                    <input value={this.state.email} onChange={this.handleEmail}
                           className="form-control text" name="email" type="email"/>

                    <label htmlFor="firstName">First Name</label>
                    <input value={this.state.firstName} onChange={this.handleFirstName}
                           className="form-control" name="firstName" type="text"/>

                    <label htmlFor="lastName">Last Name</label>
                    <input value={this.state.lastName} onChange={this.handleLastName}
                           className="form-control" name="lastName" type="text"/>

                    <label htmlFor="password">Password</label>
                    <input value={this.state.password} onChange={this.handlePassword}
                           className="form-control" name="password" type="password"/>

                    <input className="btn btn-primary mb-2" type="submit" value="Sign Up"/>
                </form>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    // propName: state.reducerName.propName
});

const mapDispatchToProps = (dispatch) => ({
    register: bindActionCreators(register, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
