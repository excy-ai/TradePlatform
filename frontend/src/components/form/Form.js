import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

export default function Form(props) {
  const subBtnClass = `btn-${props.submitBtnType}`;
  return (
    <form onSubmit={props.handleSubmit} id={props.id} name={props.name}>
      {props.children}
      <Button className={subBtnClass} type={props.type} value={props.submitBtnValue}/>
    </form>
  );
}

Form.defaultProps = {
  type: 'text',
  id: '',
  name: '',
  submitBtnValue: 'Submit',
  submitBtnType: 'primary',
  handleSubmit: () => {
  },
};

Form.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  submitBtnValue: PropTypes.string,
  submitBtnType: PropTypes.string,
  handleSubmit: PropTypes.func,
};
