import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import getOnTrade from "../../actions/items/getOnTrade";

import OnTradeItem from "../../components/onTradeItem/OnTradeItem";
import "./style.css";

function Market(props) {
    useEffect(() => {
        if (props.itemsOnTrade.length === 0) {
            props.getOnTrade({});
        }
    },[]);
    console.log(props.itemsOnTrade);
    if (props.itemsOnTrade.length === 0) {
        return ("no items on trade");
    } else {
        return (<div className={'card-group'}>
            {props.itemsOnTrade.map((item) => {
                return (
                    <OnTradeItem name={item.sign} description={item.description} userId={item.user_id} key={item.id}/>);
            })}
        </div>);
    }
}


const mapStateToProps = (state) => ({
    itemsOnTrade: state.marketReducer.itemsOnTrade,
    authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    getOnTrade: bindActionCreators(getOnTrade, dispatch)
});

Market.defaultProps = {};

Market.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
