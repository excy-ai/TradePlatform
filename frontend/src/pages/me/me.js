import React from 'react';

import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getMe from "../../actions/user/getMe";

class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            user: {},
            inventoryId: '',
            inventory: {},
            items: []
        };
    }

    componentDidMount() {
        this.props.getMe();
    }

    render() {
        if(this.props.userData === undefined){
            return <div>"data is loading"</div>;
        }
        return (
            <React.Fragment>
                <div className="card-header">
                    <NavLink exact to={'/additem'}>
                        <input className="btn btn-primary mb-2" type="submit" value="Add Item"/>
                    </NavLink>
                </div>
                <span>
                    <h4>Your inventory ID:</h4>
                    <h5>{this.props.userData.inventory.id}</h5>
                    <h4>Your items:</h4>
                    <ul> {
                        this.props.userData.items.length === 0 ? "" :
                            this.props.userData.items.map(el => (
                                <li className='list-group-item' key={el.id}>
                                    {el.sign}: {el.category}
                                </li>
                            ))}
                    </ul>
                </span>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    userData: state.userReducer.userData
});

const mapDispatchToProps = (dispatch) => ({
    getMe: bindActionCreators(getMe, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
