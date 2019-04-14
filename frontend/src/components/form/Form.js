import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
    let subBtnClass = `btn-${props.submitBtnType}`;
    useEffect(() => {
    });
    return (
        <form onSubmit={props.handleSubmit} id={props.id} name={props.name}>
            {props.children}
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
    }
};

Form.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    submitBtnValue: PropTypes.string,
    submitBtnType: PropTypes.string,
    handleSubmit: PropTypes.func
};
