import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import createOffer from '../../actions/offers/createOffer';

function OfferConfirm(props) {
  useEffect(() => {
    // if (!props.creating) {
    //   props.history.push('/me');
    // } TODO: fix bug when creating blinks to false
  });
  const buttonsBlockStyle = {
    display: 'inline-block',
    float: 'right',
  };
  //TODO: create confirm button that creates offer
  return (<React.Fragment>
    <aside style={buttonsBlockStyle}>
      <Button
        type="button"
        className={`btn-dark`}
        onButtonClick={() => {
          props.createOffer({
            target: props.targetItem.userId,
            targetItem: props.targetItem.Id,
            offeredItem: props.selectedItem.Id,
          }).then(() => {
            props.history.push('/offers');
          });
        }}
        value={'Confirm'}
      />
    </aside>
    <h2>Your item:</h2>
    <Card image={props.selectedItem.image} content={`Your ID: ${props.selectedItem.userId}`}
          name={props.selectedItem.sign}
          description={props.selectedItem.description} footer={props.selectedItem.category}/>
    <h2>For:</h2>
    <Card image={props.targetItem.image} content={`User ID: ${props.targetItem.userId}`} name={props.targetItem.sign}
          description={props.targetItem.description} footer={props.targetItem.category}/>
  </React.Fragment>);
}

const mapStateToProps = state => ({
  targetItem: state.offerReducer.targetItem,
  selectedItem: state.offerReducer.selectedItem,
});

const mapDispatchToProps = dispatch => ({
  createOffer: bindActionCreators(createOffer, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferConfirm);