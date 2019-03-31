import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCategorys from "../../actions/items/getCategorys";
import addItem from "../../actions/items/addItem";
import NavBar from "../../components/navBar/NavBar";
import SelectList from "../../components/selectList/SelectList";
import InputFieldWithTitle from "../../components/inputField/InputFieldWithTitle";

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

    render() {
        const links = [{link:'/me',value:'Me'}];
        return (
            <React.Fragment>
                <NavBar data={links}/>
                <form onSubmit={this.handleSubmit}>
                    <InputFieldWithTitle value={this.state.sign} onChange={this.handleSign} title={'Item Sign'}/>
                    <InputFieldWithTitle value={this.state.description} onChange={this.handleDescription} title={'Description'}/>
                    <SelectList currentValue = {this.state.category} onChange={this.handleCategory}
                                list = {this.props.categoryList} listLabel={'Category:'} listName={'category'}/>
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