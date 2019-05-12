import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../button/Button';
import Alert from '../alert/Alert';
import setTarget from '../../store/actions/offers/creatingPhase/setTarget';
import startCreatingOffer from '../../store/actions/offers/creatingPhase/startCreatingOffer';

function OnTradeItem(props) {
  const alertStyle = {
    fontSize: '11px',
  };
  // 1. You have named this variable - button. But it could be an Alert inside.
  // 2. Use prettier to format code right.
  // --mrurenko 2019-05-11
  const button =
    props.userId === props.ctxId ? <Alert style={alertStyle}>You can't trade with yourself</Alert> :
      <Button
        type="button"
        className={`btn-secondary`}
        onButtonClick={onClickBody => {
          props.startCreatingOffer();
          props.setTarget(onClickBody);
          props.history.push('/offers/creating');
        }}
        onClickBody={{
          Id: props.Id,
          image: props.image,
          sign: props.name,
          description: props.description,
          category: props.category,
          userId: props.userId,
        }}
        value={'Target for trade'}
      />;


  // Why not just return a Card component? Why wrapping in a Fragment
  // --mrurenko 2019-05-11
  return (<React.Fragment>
      <Card image={props.image} content={button} name={props.name}
            description={props.description} footer={props.category}/>
    </React.Fragment>
  );
}

OnTradeItem.defaultProps = {
  Id: '',
  image: '...',
  name: '',
  description: '',
  category: '',
};

OnTradeItem.propTypes = {
  Id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = state => ({
  ctxId: state.meReducer.userId,
});

const mapDispatchToProps = dispatch => ({
  setTarget: bindActionCreators(setTarget, dispatch),
  startCreatingOffer: bindActionCreators(startCreatingOffer, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnTradeItem);
