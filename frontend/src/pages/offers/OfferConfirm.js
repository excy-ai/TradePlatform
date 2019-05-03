import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function OfferConfirm(props) {
  useEffect(() => {
    // if (!props.creating) {
    //   props.history.push('/me');
    // } TODO: fix bug when creating blinks to false
  });
  console.log(props.targetItem);
  console.log(props.selectedItem);
  //TODO: create confirm button that creates offer
  return (<React.Fragment>
    Data is loading
  </React.Fragment>);
}

const mapStateToProps = state => ({
  targetItem: state.offerReducer.targetItem,
  selectedItem: state.offerReducer.selectedItem,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferConfirm);