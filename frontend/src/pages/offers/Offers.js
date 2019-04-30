import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getTargeted from '../../actions/offers/getTargeted';
import getSended from '../../actions/offers/getSended';

function Offers(props) {
  useEffect(() => {
    if (!props.authenticated) {
      props.history.push('/signin');
    } else {
      props.getSended();
      props.getTargeted();
    }
  }, []);
  console.log(props.sended);
  console.log(props.targeted);
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  sended: state.offerReducer.sended,
  targeted: state.offerReducer.targeted,
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getTargeted: bindActionCreators(getTargeted, dispatch),
  getSended: bindActionCreators(getSended, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offers);
