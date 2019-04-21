import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function OnTradeItem(props) {
  const style = {
    margin: '5px 0 5px 10px',
    maxWidth: 'calc(50% - 20px)',
  };
  //TODO: add card comp with title/img/description/button(with action)/bottom text and images

  console.log(props);
  return (
    <div className="card" style={style}>
      <img className="card-img-top" src={props.image.substring("public/".length) || '...'}
           alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">
          Trade
        </a>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          <NavLink to={'/user/' + props.userId}>offerer</NavLink>
        </small>
      </div>
    </div>
  );
}

OnTradeItem.defaultProps = {
  image: '...',
  name: '',
  description: '',
};

OnTradeItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
