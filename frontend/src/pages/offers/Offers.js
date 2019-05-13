import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getTargeted from '../../store/actions/offers/get/targeted/getTargeted';
import getSended from '../../store/actions/offers/get/sended/getSended';
import Offer from '../../components/offer/Offer';
import Alert from '../../components/alert/Alert';
import SwitchBlock from './switch/SwitchBlock';

import './style.css';

function Offers(props) {
  const [isSended, setIsSended] = useState(true);
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
  if (!(props.sended && props.targeted)) {
    return null;
  }
  const type = isSended ? 'sended' : 'targeted';
  const currentList = isSended ? props.sended : props.targeted;
  return (
    <React.Fragment>
      <SwitchBlock isSended={isSended} onToggle={onClick}/>
      <div className="container-fluid">
        {currentList.length === 0 ? <Alert>{`You have no ${type} offers`}</Alert>
          : currentList.map((offer) => {
            return <Offer type={type} offer={offer} key={offer.id}/>;
          })
        }
      </div>
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
