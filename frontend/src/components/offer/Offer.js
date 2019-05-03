import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import { bindActionCreators } from 'redux';
import getOfferItems from '../../actions/offers/getOfferItems';
import connect from 'react-redux/es/connect/connect';

function Offer(props) {
  const { Id } = props.offer;
  const [target, setTarget] = useState({});
  const [offered, setOffered] = useState({});
  useEffect(() => {
    props.getOfferItems(Id).then((res) => {
      if (res) {
        setTarget(res.target);
        setOffered(res.offered);
      } else {
        return ('Data is loading');
      }
    });
  }, []);
  return (<React.Fragment>
      <div className="card-group">
        <Card image={offered.image} name={offered.sign}
              description={offered.description} footer={offered.category}/>
        <Card image={target.image} name={target.sign}
              description={target.description} footer={target.category}/>
      </div>
    </React.Fragment>
  );
}

Offer.defaultProps = {
  offer: {},
};

Offer.propTypes = {
  offer: PropTypes.object,
};

const mapStateToProps = state => ({
  target: state.offerReducer.target,
  offered: state.offerReducer.offered,
});

const mapDispatchToProps = dispatch => ({
  getOfferItems: bindActionCreators(getOfferItems, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offer);