import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCategorys from "../../actions/items/getCategorys";

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }


    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = (event) => {
        fetch('/api/auth/signin', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (!response.ok) {
                throw Error("bad");
            }
            window.location.pathname = '/me';
        }).catch((err) => {
            console.error("user not authenticated");
        });
        event.preventDefault();
    };

    componentDidMount() {
        this.props.getCategorys();
    }

    renderList = () => {
        return this.props.categoryList.map((item, index) => {
            return (<li className={"list-group-item"} key={index}>{item}</li>);
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
                <ul>
                    {this.renderList()}
                </ul>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    categoryList: state.itemReducer.categoryList
});

const mapDispatchToProps = (dispatch) => ({
    getCategorys: bindActionCreators(getCategorys, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);