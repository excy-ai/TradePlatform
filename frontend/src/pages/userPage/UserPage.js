import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import getInfo from "../../actions/users/getInfo";
import {connect} from "react-redux";
import UserProfile from "../../components/userProfile/UserProfile";

function UserPage(props) {
    useEffect(() => {
        props.getInfo(props.match.params.id);
    }, []);
    if (props.items === null || props.items === undefined) {
        return <div>"data is loading"</div>;
    }
    return (
        <React.Fragment>
            <UserProfile userId={props.match.params.id}
                         items={props.items}/>
        </React.Fragment>
    );

}

const mapStateToProps = (state) => ({
    items: state.userReducer.items
});

const mapDispatchToProps = (dispatch) => ({
    getInfo: bindActionCreators(getInfo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
