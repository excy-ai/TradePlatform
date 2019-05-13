import React from 'react';
import Button from './Button';
import './style.css';

export default function TradeButton(props) {
  return <Button
    className={`btn-${props.onTrade ? 'danger' : 'warning'} trade__btn`}
    onButtonClick={() => {
      props.onToggle();
    }}
    value={props.onTrade ? 'Stop Trading' : 'Trade this'}
  />;
}