import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getTargeted from '../../store/actions/offers/get/targeted/getTargeted';
import getSended from '../../store/actions/offers/get/sended/getSended';
import Offer from '../../components/offer/Offer';
import Alert from '../../components/alert/Alert';

function Offers(props) {
  const [isSended, setIsSended] = useState(true);
  //create button to switch from sended to targeted;
  useEffect(() => {
    if (!props.authenticated) {
      props.history.push('/signin');
    } else {
      props.getSended();
      props.getTargeted();
    }
  }, []);
  let onClick = () => {
    setIsSended(!isSended);
  };
  // Consistent Styles.
  // --mrurenko 2019-05-11
  const btnStyle = {
    margin: '10px auto 10px auto',
    maxWidth: '160px',
  };
  // 1. if(!CURRENT_CONDITION) { return null; }
  // 2. Too complex - simplify, extract components
  // --mrurenko 2019-05-11
  if (props.sended && props.targeted) {
    return (
      <React.Fragment>
        <div style={btnStyle} className={'justify-content-center'}>
          {isSended ?
            <button type="button" className="btn btn-secondary" onClick={onClick}>Switch to Targeted</button>
            : <button type="button" className="btn btn-info" onClick={onClick}>Switch to Sended</button>}
        </div>
        <div className="container-fluid">
          {isSended ?
            props.sended.length === 0 ?
              <Alert>
                You have no sended offers
              </Alert>
              : props.sended.map((offer) => {
                return <Offer type={'sended'} offer={offer} key={offer.id}/>;
              })
            :
            props.targeted.length === 0 ?
              <Alert>
                You have no targeted offers
              </Alert> :
              props.targeted.map((offer) => {
                return <Offer type={'targeted'} offer={offer} key={offer.id}/>;
              })
          }
        </div>
      </React.Fragment>
    );
  }
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
