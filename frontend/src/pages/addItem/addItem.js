import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCategorys from "../../actions/items/getCategorys";
import addItem from "../../actions/items/addItem";

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: '',
            description: '',
            category: ''
        };
    }

    handleSign = (event) => {
        this.setState({
            sign: event.target.value
        });
    };

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handleCategory = (event) => {
        this.setState({
            category: event.target.value
        });
    };

    handleSubmit = (event) => {
        console.log(this.state);
        this.props.addItem(this.state).then((response) => {
            if (response.ok) {
                this.props.history.push('/me');
            }
        });
        event.preventDefault();
    };

    componentDidMount() {
        this.props.getCategorys();
    }

    renderCategoryList = () => {
        return this.props.categoryList.map((item, index) => {
            return (<option key={index} value={item}>{item}</option>);
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="card-header">
                    <NavLink exact to={'/me'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Me"/>
                    </NavLink>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Item Sign</span>
                        </div>
                        <input value={this.state.sign} onChange={this.handleSign}
                               type="text" className="form-control" name="sign"/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        </div>
                        <input value={this.state.description} onChange={this.handleDescription}
                               type="text" className="form-control" name="description"/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Category:</label>
                        </div>
                        <select className={"custom-select"} name="category" value={this.state.category}
                                onChange={this.handleCategory}>
                            <option defaultValue={'nothing'}>Choose...</option>
                            {this.renderCategoryList()}
                        </select>
                    </div>
                    <input className="btn btn-danger" type="submit" value="Submit"/>
                </form>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    categoryList: state.itemReducer.categoryList
});

const mapDispatchToProps = (dispatch) => ({
    getCategorys: bindActionCreators(getCategorys, dispatch),
    addItem: bindActionCreators(addItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);