import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import register from "../../actions/auth/register";
import NavBar from "../../components/navBar/NavBar";
import Form from "../../components/form/Form";

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
        this.props.register(this.state).then((response) => {
            if (response.ok) {
                window.location.pathname = '/signin';
            }
        });
        event.preventDefault();
    };

    render() {
        const links = [{link: '/signin', value: 'Sign In'}];
        // These 'fields' looks like components.
        // Maybe they should be components?
        // --mrurenko 2019-04-06
        const fields = [
            {
                value: this.state.email,
                name: "email",
                placeholder: "enter email",
                onChange: this.handleEmail,
                label: "Email address"
            },
            {
                value: this.state.firstName,
                name: "firstName",
                placeholder: "enter firstName",
                onChange: this.handleFirstName,
                label: "First Name"
            },
            {
                value: this.state.lastName,
                name: "lastName",
                placeholder: "enter lastName",
                onChange: this.handleLastName,
                label: "Last Name"
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
                <Form handleSubmit={this.handleSubmit} id={'signup'} name={'signup'} submitBtnType={'danger'}
                      submitBtnValue={"Sign Up"} formFields={fields}
                />
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
