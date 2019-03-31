import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import authenticate from '../../actions/auth/authenticate';
import NavBar from "../../components/navBar/NavBar";
import Form from "../../components/form/Form";

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
        this.props.authenticate(this.state).then(() => {
            this.props.history.push('/me')
        });
        event.preventDefault();
    };

    render() {
        const links = [{link: '/', value: 'Sign Up'}, {link: '/me', value: 'Me'}];
        const fields = [
            {
                value: this.state.email,
                name: "email",
                placeholder: "enter email",
                onChange: this.handleEmail,
                label: "Email address"
            },
            {
                value: this.state.password,
                name: "password",
                placeholder: "enter password",
                onChange: this.handlePassword,
                label: "Password"
            }
        ];
        return (
            <React.Fragment>
                <NavBar data={links}/>
                <Form handleSubmit={this.handleSubmit} id={'signin'} name={'signin'} submitBtnType={'danger'}
                      submitBtnValue={"Sign In"} formFields={fields}
                />
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