import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import getMe from '../../store/actions/me/getMe';
import { connect } from 'react-redux';
import Button from '../button/Button';
import './style.css';

function NavBar(props) {
  let data = [
    { link: '/', value: 'Sign Up', auth: false },
    { link: '/signin', value: 'Sign In', auth: false },
    { link: '/additem', value: 'Add Item', auth: true },
    { link: '/offers', value: 'Offers', auth: true },
    { link: '/me', value: 'Me', auth: true },
    { link: '/market', value: 'Market', auth: true },
  ];
  return (
    <div className="card-header">
      {data.map(item => {
        if (item.auth === props.authenticated) {
          return (
            <div key={item.link} className={'nav-bar_link'}>
              <NavLink exact to={item.link}>
                <Button value={item.value} className={'btn-primary mb-2'}/>
              </NavLink>
            </div>
          );
        }
      })}
    </div>
  );
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getMe: bindActionCreators(getMe, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
