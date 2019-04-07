import React from 'react';
import PropTypes from 'prop-types';

// It could be 'functional' component. Why have you used the 'class' one here?
// --mrurenko 2019-04-06
export default class Form extends React.Component {

    render() {
        let subBtnClass = '';
        // 1. Components that will use this 'Form' component should know nothing about classnames.
        // 2. Button classnames should be defined in 'Button' component.
        // --mrurenko 2019-04-06
        if (this.props.submitBtnType === 'danger') {
            subBtnClass = "btn-danger";
        } else {
            subBtnClass = "btn-primary";
        }
        return (
            <form onSubmit={this.props.handleSubmit} id={this.props.id} name={this.props.name}>
                {this.props.children}
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
