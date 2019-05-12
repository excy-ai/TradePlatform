import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getItems from '../../store/actions/items/getItems';
import getMe from '../../store/actions/me/getMe';

import './style.css';

function Main(props) {
  const [isAuthPending, setIsAuthPending] = useState(true);
  useEffect(() => {
    props.getMe().then(() => {
      setIsAuthPending(false);
    }).then(() => {
      props.getItems();
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
  getItems: bindActionCreators(getItems, dispatch),
  getMe: bindActionCreators(getMe, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
