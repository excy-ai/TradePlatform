import React from 'react';
import Button from '../button/Button';
import PropTypes from 'prop-types';
import List from '../list/List';
import './style.css';

export default function ConfirmSidePanel(props) {
  return <aside className={'side-panel'}>
    <Button
      className={`btn-dark side-panel_btn`}
      onButtonClick={() => {
        props.onConfirm();
      }}
      value={'Confirm'}
    />
    <Button
      className={`btn-dark side-panel_btn`}
      onButtonClick={() => {
        props.onCancel();
      }}
      value={'Cancel'}
    />
  </aside>;
}

List.defaultProps = {
  onConfirm: () => {
  },
  onCancel: () => {
  },
};

List.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};