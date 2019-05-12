import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  // Why do you use 'let' instead of 'const'?
  // --mrurenko 2019-05-10
  let subBtnClass = `btn-${props.submitBtnType}`;
  return (
    <form onSubmit={props.handleSubmit} id={props.id} name={props.name}>
      {props.children}
      {/* You should use your own component here */}
      {/* --mrurenko 2019-05-10 */}
      <button className={`btn ${subBtnClass}`} type={props.type}>{props.submitBtnValue}</button>
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
