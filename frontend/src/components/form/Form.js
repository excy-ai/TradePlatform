import React from 'react';
import PropTypes from 'prop-types';
import FormField from "./FormField";

export default class Form extends React.Component {
    renderFields = () => {
        return this.props.formFields.map((child, index) => {
            const {value, name, placeholder, onChange, label} = child;
            return <FormField key={index} className={'form-control text'} name={name}
                              label={label} onChange={onChange} value={value} placeholder={placeholder}/>
        })
    };

    render() {
        let subBtnClass = '';
        if (this.props.submitBtnType === 'danger') {
            subBtnClass = "btn-danger";
        } else {
            subBtnClass = "btn-primary";
        }
        return (
            <form onSubmit={this.props.handleSubmit} id={this.props.id} name={this.props.name}>
                {this.renderFields()}
                <button className={`btn ${subBtnClass}`} type={this.props.type} >{this.props.submitBtnValue}</button>
            </form>
        );
    }
}

Form.defaultProps = {
    type: 'text',
    id: '',
    name: '',
    formFields:[],
    submitBtnValue: 'Submit',
    submitBtnType: 'primary',
    handleSubmit: () => {
    }
};

Form.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    formFields: PropTypes.array,
    submitBtnValue: PropTypes.string,
    submitBtnType: PropTypes.string,
    handleSubmit: PropTypes.func
};