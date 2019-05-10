import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Card(props) {
  const { name, description, style, content, image, footer } = props;
  const imgStyle = {
    maxWidth: '480x',
    maxHeight: '240px'
  };
  const fullStyle = {
    margin: '10px 0 5px 10px',
    maxWidth: 'calc(25%)',
    ...style,
  };
  return (
    <div className="card" style={fullStyle}>
      <img className="card-img-top" style={imgStyle} src={image || '...'}
           alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        {content}
      </div>
      <div className="card-footer">
        <small className="text-muted">
          {footer}
        </small>
      </div>
    </div>);
}

Card.defaultProps = {
  style: {},
  className: '',
  value: '',
  type: 'button',
  content: null,
  footer: null
};

Card.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.node,
  footer: PropTypes.node
};