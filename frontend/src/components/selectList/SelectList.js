import React from 'react';
import PropTypes from 'prop-types';

export default class SelectList extends React.Component {
    renderList = () => {
        return this.props.list.map((item, index) => {
            return (<option key={index} value={item}>{item}</option>);
        });
    };

    render() {
        return (
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <label className="input-group-text">{this.props.listLabel}</label>
                </div>
                <select className={"custom-select"} name={this.props.listName} value={this.props.currentValue}
                        onChange={this.props.onChange}>
                    <option defaultValue={'nothing'}>Choose...</option>
                    {this.renderList()}
                </select>
            </div>
        );
    }
}


SelectList.defaultProps = {
    listName: '',
    currentValue:'',
    listLabel:'',
    list:[]
};

SelectList.propTypes = {
    listName: PropTypes.string,
    list: PropTypes.array,
    currentValue: PropTypes.string,
    listLabel: PropTypes.string
};