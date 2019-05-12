import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import List from '../../components/list/List';
import Alert from '../../components/alert/Alert';
import ListItem from '../../components/listItem/ListItem';
import Button from '../../components/button/Button';
import { bindActionCreators } from 'redux';
import getOfferItems from '../../store/actions/offers/get/items/getOfferItems';
import acceptOffer from '../../store/actions/offers/accept/acceptOffer';
import rejectOffer from '../../store/actions/offers/reject/rejectOffer';
import cancelOffer from '../../store/actions/offers/cancel/cancelOffer';
import { connect } from 'react-redux';

function Offer(props) {
  const id = props.offer.id;
  useEffect(() => {
    props.getOfferItems(id).catch(() => {
      return ('Data is loading');
    });
  }, []);
  let offerItem = props.offers.find((item) => item.id === id);
  return (
    <div className="card-group">
      <h5>Offer id: {id}</h5>
      {props.offer.status.toUpperCase() === 'PENDING' ? <List>
          <ListItem>
            {props.type === 'sended' ?
              <React.Fragment>
                <Button
                  type="button"
                  className={`btn-dark`}
                  onButtonClick={(onClickBody) => {
                    props.cancelOffer(onClickBody);
                  }}
                  onClickBody={id}
                  value={'Cancel'}
                />
              </React.Fragment> :
              <React.Fragment>
                <Button
                  type="button"
                  className={`btn-dark`}
                  onButtonClick={(onClickBody) => {
                    props.acceptOffer(onClickBody);
                  }}
                  onClickBody={id}
                  value={'Accept'}
                />
                <Button
                  type="button"
                  className={`btn-dark`}
                  onButtonClick={(onClickBody) => {
                    props.rejectOffer(onClickBody);
                  }}
                  onClickBody={id}
                  value={'Reject'}
                />
              </React.Fragment>}
          </ListItem>
        </List> :
        <Alert>Offer status: {props.offer.status}</Alert>}
      {offerItem ?
        <React.Fragment>
          <h6>Offered item:</h6>
          <Card
            image={offerItem.offered.image}
            name={offerItem.offered.sign}
            description={offerItem.offered.description}
            footer={offerItem.offered.category}/>
          <h6>Targeted item:</h6>
          <Card
            image={offerItem.target.image}
            name={offerItem.target.sign}
            description={offerItem.target.description}
            footer={offerItem.target.category}/>
        </React.Fragment>
        : 'Data is loading'}
    </div>
  );
}

Offer.defaultProps = {
  offer: {},
  type: 'sended',
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
  acceptOffer: bindActionCreators(acceptOffer, dispatch),
  rejectOffer: bindActionCreators(rejectOffer, dispatch),
  cancelOffer: bindActionCreators(cancelOffer, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offer);
