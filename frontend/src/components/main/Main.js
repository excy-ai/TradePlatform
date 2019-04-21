import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getMe from '../../actions/me/getMe';

import './style.css';

function Main(props) {
  //todo: fetch user and other info here, after it check on other pages to check existence of needed info.
  const [isAuthPending, setIsAuthPending] = useState(true);
  useEffect(() => {
    props.getMe().then(() => {
      setIsAuthPending(false);
    });
  });
  if (!isAuthPending) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
  return <div>data is loading.</div>;
}

Main.defaultProps = {};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getMe: bindActionCreators(getMe, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
