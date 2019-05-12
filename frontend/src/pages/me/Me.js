import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMe from '../../store/actions/me/getMe';
import switchTradeStatus from '../../store/actions/items/switchTradeStatus';
import MyProfile from '../../components/myProfile/MyProfile';

class Me extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/signin');
    }
  }

  componentDidUpdate() {
    if (!this.props.authenticated) {
      this.props.history.push('/signin');
    }
  }

  render() {
    if (this.props.userId === '') {
      return <div>"data is loading"</div>;
    }
    // Why not just return a MyProfile component?
    // --mrurenko 2019-05-11
    return (
      <React.Fragment>
        <MyProfile
          userId={this.props.userId}
          items={this.props.items}
          onItemClick={this.props.switchTradeStatus}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.meReducer.userId,
  items: state.itemReducer.items,
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getMe: bindActionCreators(getMe, dispatch),
  switchTradeStatus: bindActionCreators(switchTradeStatus, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Me);
