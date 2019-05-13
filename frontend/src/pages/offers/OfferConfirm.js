import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../components/item/Item';
import ConfirmSidePanel from '../../components/sidePanel/ConfirmSidePanel';
import createOffer from '../../store/actions/offers/create/createOffer';
import cancelCreatingOffer from '../../store/actions/offers/creating/cancelCreatingOffer';

function OfferConfirm(props) {
  useEffect(() => {
    // if (!props.creating) {
    //   props.history.push('/me');
    // } TODO: fix bug when props.creating blinks to false
  });

  return (<React.Fragment>
    <ConfirmSidePanel
      onConfirm={() => {
        props.createOffer({
          target: props.targetItem.userId,
          targetItem: props.targetItem.Id,
          offeredItem: props.selectedItem.Id,
        }).then(() => {
          props.history.push('/offers');
        });
      }}
      onCancel={() => {
        props.cancelCreatingOffer();
        props.history.push('/offers');
      }}
    />
    <h2>Your item:</h2>
    <Item item={props.selectedItem}
          content={`Your ID: ${props.selectedItem.userId}`}/>
    <h2>For:</h2>
    <Item
      item={props.targetItem}
      content={`User ID: ${props.targetItem.userId}`}/>
  </React.Fragment>);
}

const mapStateToProps = state => ({
  targetItem: state.offerReducer.targetItem,
  selectedItem: state.offerReducer.selectedItem,
});

const mapDispatchToProps = dispatch => ({
  createOffer: bindActionCreators(createOffer, dispatch),
  cancelCreatingOffer: bindActionCreators(cancelCreatingOffer, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferConfirm);
