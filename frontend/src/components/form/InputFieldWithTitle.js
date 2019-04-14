import React from 'react';
import PropTypes from 'prop-types';

export default class InputFieldWithTitle extends React.Component {
    render() {
        return (
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{this.props.title}</span>
                </div>
                <input value={this.props.value} onChange={this.props.onChange}
                       type="text" className="form-control" name={this.props.name}/>
            </div>
        );
    }
}


InputFieldWithTitle.defaultProps = {
    value: '',
    title:'',
    onChange:()=>{}
};

InputFieldWithTitle.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func
};
