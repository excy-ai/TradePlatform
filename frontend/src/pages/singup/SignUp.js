import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import register from '../../actions/auth/register';
import Form from '../../components/form/Form';

import './style.css';
import FormField from '../../components/form/FormField';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    this.props.register(this.state).then(res => {
      if (res) {
        this.props.history.push('/signin');
      }
    });
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Form
          handleSubmit={this.handleSubmit}
          id={'signup'}
          name="signup"
          submitBtnType={'danger'}
          submitBtnValue={'Sign Up'}
        >
          <FormField
            className={'form-control text'}
            name={'email'}
            type={'email'}
            label={'Email address'}
            onChange={this.handleInput}
            value={this.state.email}
            placeholder={'enter email'}
          />
          <FormField
            className={'form-control text'}
            name={'firstName'}
            label={'enter firstName'}
            onChange={this.handleInput}
            value={this.state.firstName}
            placeholder={'First Name'}
          />
          <FormField
            className={'form-control text'}
            name={'lastName'}
            label={'Last Name'}
            onChange={this.handleInput}
            value={this.state.lastName}
            placeholder={'enter lastName'}
          />
          <FormField
            className={'form-control text'}
            name={'password'}
            type={'password'}
            label={'Password'}
            onChange={this.handleInput}
            value={this.state.password}
            placeholder={'enter password'}
          />
        </Form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // propName: state.reducerName.propName
});

const mapDispatchToProps = dispatch => ({
  register: bindActionCreators(register, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
