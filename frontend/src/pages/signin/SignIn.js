import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import authenticate from '../../store/actions/auth/authenticate';
import Form from '../../components/form/Form';
import FormField from '../../components/form/FormField';

import './style.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.push('/me');
    }
  }

  componentDidUpdate() {
    if (this.props.authenticated) {
      this.props.history.push('/me');
    }
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = event => {
    this.props.authenticate(this.state).then(res => {
      if (res) {
        this.props.history.push('/me');
      }
    });
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Form
          handleSubmit={this.handleSubmit}
          id={'signin'}
          name={'signin'}
          submitBtnType={'danger'}
          submitBtnValue={'Sign In'}
        >
          <FormField
            className={'form-control text'}
            name={'email'}
            type={'email'}
            label={'Email address'}
            onChange={this.handleEmail}
            value={this.state.email}
            placeholder={'enter email'}
          />
          <FormField
            className={'form-control text'}
            name={'password'}
            type={'password'}
            label={'Password'}
            onChange={this.handlePassword}
            value={this.state.password}
            placeholder={'enter password'}
          />
        </Form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
  error: state.authReducer.error,
});

const mapDispatchToProps = dispatch => ({
  authenticate: bindActionCreators(authenticate, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
