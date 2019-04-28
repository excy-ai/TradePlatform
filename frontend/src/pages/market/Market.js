import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getOnTrade from '../../actions/items/getOnTrade';

import OnTradeItem from '../../components/onTradeItem/OnTradeItem';
import Alert from '../../components/alert/Alert';
import './style.css';

function Market(props) {
  useEffect(() => {
      props.getOnTrade({});
  }, []);
  if (props.itemsOnTrade.length === 0) {
    return (
      <div className={'market_alert_no_items'}>
        <Alert>no items on trade</Alert>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        {props.itemsOnTrade.map(item => {
          return (
            <OnTradeItem
              name={item.sign}
              description={item.description}
              userId={item.user_Id}
              key={item.Id}
              image={item.image}
              category={item.category}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

Market.defaultProps = {};

Market.propTypes = {};

const mapStateToProps = state => ({
  itemsOnTrade: state.marketReducer.itemsOnTrade,
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getOnTrade: bindActionCreators(getOnTrade, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Market);
