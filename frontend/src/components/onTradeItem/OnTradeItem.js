import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../button/Button';
import Alert from '../alert/Alert';
import setTarget from '../../store/actions/offers/creating/setTarget';
import startCreatingOffer from '../../store/actions/offers/creating/startCreatingOffer';

function OnTradeItem(props) {
  const alertStyle = {
    fontSize: '11px',
  };
  const content =
    props.userId === props.ctxId ?
      <Alert style={alertStyle}>You can't trade with yourself</Alert> :
      <Button
        type="button"
        className={`btn-secondary`}
        onButtonClick={() => {
          props.startCreatingOffer();
          props.setTarget({
            Id: props.Id,
            image: props.image,
            sign: props.name,
            description: props.description,
            category: props.category,
            userId: props.userId,
          });
          props.history.push('/offers/creating');
        }}
        value={'Target for trade'}
      />;
  const footer = <small className="text-muted">
    <NavLink to={'/user/' + props.userId}>Handler</NavLink>
  </small>;

  return <Card
    image={props.image}
    content={content}
    name={`${props.name} | ${props.category}`}
    description={props.description}
    footer={footer}/>;
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
