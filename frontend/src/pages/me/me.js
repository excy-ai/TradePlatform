import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getMe from "../../actions/me/getMe";
import switchTradeStatus from "../../actions/me/switchTradeStatus";
import UserProfile from "../../components/userProfile/userProfile";

class Me extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMe();
        if(!this.props.authenticated){
            this.props.history.push('/signin');
        }
    }

    componentDidUpdate() {
        if(!this.props.authenticated){
            this.props.history.push('/signin');
        }
    }


    render() {
        if (this.props.userId === '') {
            return <div>"data is loading"</div>;
        }
        return (
            <React.Fragment>
                <UserProfile userId={this.props.userId}
                             items={this.props.items} onItemClick={this.props.switchTradeStatus}/>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    userId: state.meReducer.userId,
    items: state.meReducer.items,
    authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    getMe: bindActionCreators(getMe, dispatch),
    switchTradeStatus: bindActionCreators(switchTradeStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
