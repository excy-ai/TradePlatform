import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import { bindActionCreators } from 'redux';
import getOfferItems from '../../actions/offers/getOfferItems';
import connect from 'react-redux/es/connect/connect';

function Offer(props) {
  const id = props.offer.id;
  const type = props.type;
  useEffect(() => {
    props.getOfferItems(id).catch(() => {
      return ('Data is loading');
    });
  }, []);
  let offerItems = props.offers.find((item) => item.id === id);
  //TODO: add buttons after offer: {id} for accept/reject/cancel (depends on offer type)
  //sended: cancel
  //targeted: accept/reject
  return (
    <div className="card-group">
      <h5>Offer: {id}</h5>
      {offerItems ?
        <React.Fragment>
          <h6>Offered item:</h6>
          <Card image={offerItems.offered.image} name={offerItems.offered.sign}
                description={offerItems.offered.description} footer={offerItems.offered.category}/>
          <h6>Targeted item:</h6>
          <Card image={offerItems.target.image} name={offerItems.target.sign}
                description={offerItems.target.description} footer={offerItems.target.category}/>
        </React.Fragment>
        : 'Data is loading'}
    </div>
  );
}

Offer.defaultProps = {
  offer: {},
  type: '',
};

Offer.propTypes = {
  offer: PropTypes.object,
  type: PropTypes.string,
};

const mapStateToProps = state => ({
  offers: state.offerReducer.offers,
});

const mapDispatchToProps = dispatch => ({
  getOfferItems: bindActionCreators(getOfferItems, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offer);