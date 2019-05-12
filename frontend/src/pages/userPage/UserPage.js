import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import getInfo from '../../store/actions/users/getInfo';
import { connect } from 'react-redux';
import UserProfile from '../../components/userProfile/UserProfile';

function UserPage(props) {
  useEffect(() => {
    if (!props.authenticated) {
      props.history.push('/signin');
    }
    props.getInfo(props.match.params.id);
  }, []);
  if (props.items === null || props.items === undefined) {
    return <div>"data is loading"</div>;
  }
  return <UserProfile userId={props.match.params.id} items={props.items}/>;
}

const mapStateToProps = state => ({
  items: state.userReducer.items,
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getInfo: bindActionCreators(getInfo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);
