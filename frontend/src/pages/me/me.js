import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getMe from "../../actions/user/getMe";
import switchTradeStatus from "../../actions/user/switchTradeStatus";
import NavBar from "../../components/navBar/NavBar";
import UserProfile from "../../components/userProfile/userProfile";

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
        if (this.props.userId === '') {
            return <div>"data is loading"</div>;
        }
        const links = [{link: '/additem', value: 'Add Item'}];
        return (
            <React.Fragment>
                <NavBar data={links}/>
                <UserProfile userId={this.props.userId} inventoryId={this.props.inventoryId}
                             items={this.props.items} onItemClick={this.props.switchTradeStatus}/>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    inventoryId: state.userReducer.inventoryId,
    userId: state.userReducer.userId,
    items: state.userReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
    getMe: bindActionCreators(getMe, dispatch),
    switchTradeStatus: bindActionCreators(switchTradeStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
