import React from 'react';
import Button from '../../../components/button/Button';
import PropTypes from 'prop-types';

export default function SwitchBlock(props) {
  return <div className={'justify-content-center btn-switch'}>
    {props.isSended ?
      <Button className="btn-secondary" onButtonClick={props.onToggle} value={'Switch to Targeted'}/>
      : <Button className="btn-info" onButtonClick={props.onToggle} value={'Switch to Sended'}/>}
  </div>;
}

SwitchBlock.defaultProps = {
  isSended: true,
  onToggle: () => {
  },
};

SwitchBlock.propTypes = {
  isSended: PropTypes.bool,
  onToggle: PropTypes.func,
};
