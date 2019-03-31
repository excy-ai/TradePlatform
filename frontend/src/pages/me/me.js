import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getMe from "../../actions/user/getMe";
import NavBar from "../../components/navBar/NavBar";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";

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
        if (this.props.userData === undefined) {
            return <div>"data is loading"</div>;
        }
        const links = [{link: '/additem', value: 'Add Item'}];
        return (
            <React.Fragment>
                <NavBar data={links}/>
                <ProfileInfo userId={this.props.userData.user.id} inventoryId={this.props.userData.inventory.id}
                items={this.props.userData.items}/>
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
