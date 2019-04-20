import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCategorys from "../../actions/items/getCategorys";
import addItem from "../../actions/items/addItem";
import SelectList from "../../components/selectList/SelectList";
import InputFieldWithTitle from "../../components/form/InputFieldWithTitle";

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: '',
            description: '',
            category: ''
        };
    }

    handleEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        this.props.addItem(this.state).then(() => {
            this.props.history.push('/me');
        });
        event.preventDefault();
    };

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.history.push('/signin');
        }
        this.props.getCategorys();
    }


    render() {
        return (
            <React.Fragment>
                {/* You should use your 'From' component here */}
                {/* --mrurenko 2019-04-06 */}
                <form onSubmit={this.handleSubmit}>
                    <InputFieldWithTitle value={this.state.sign} name={"sign"} onChange={this.handleEvent} title={'Item Sign'}/>
                    <InputFieldWithTitle value={this.state.description} name={"description"} onChange={this.handleEvent}
                                         title={'Description'}/>
                    <SelectList currentValue={this.state.category} onChange={this.handleEvent}
                                list={this.props.categoryList} listLabel={'Category:'} listName={'category'}/>
                    <input className="btn btn-danger" type="submit" value="Submit"/>
                </form>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    categoryList: state.itemReducer.categoryList.map(item => item.title),
    authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    getCategorys: bindActionCreators(getCategorys, dispatch),
    addItem: bindActionCreators(addItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
