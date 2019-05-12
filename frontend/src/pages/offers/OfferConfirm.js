import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import createOffer from '../../store/actions/offers/create/createOffer';
import cancelCreatingOffer from '../../store/actions/offers/creating/cancelCreatingOffer';

function OfferConfirm(props) {
  useEffect(() => {
    // if (!props.creating) {
    //   props.history.push('/me');
    // } TODO: fix bug when props.creating blinks to false
  });
  // Consistent styling!
  // --mrurenko 2019-05-11
  const buttonsBlockStyle = {
    display: 'inline-block',
    float: 'right',
  };
  const btnStyle = { marginTop: '10px' };
  // Too complex, simplify.
  // --mrurenko 2019-05-11
  return (<React.Fragment>
    <aside style={buttonsBlockStyle}> {/*TODO: make confirm side panel*/}
      <Button
        style={btnStyle}
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
      <Button
        style={btnStyle}
        type="button"
        className={`btn-dark`}
        onButtonClick={() => {
          props.cancelCreatingOffer();
          props.history.push('/offers');
        }}
        value={'Cancel'}
      />
    </aside>
    <h2>Your item:</h2>
    <Card
      image={props.selectedItem.image}
      content={`Your ID: ${props.selectedItem.userId}`}
      name={props.selectedItem.sign}
      description={props.selectedItem.description}
      footer={props.selectedItem.category}/>
    <h2>For:</h2>
    <Card
      image={props.targetItem.image}
      content={`User ID: ${props.targetItem.userId}`}
      name={props.targetItem.sign}
      description={props.targetItem.description}
      footer={props.targetItem.category}/>
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
