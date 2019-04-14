import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import getOnTrade from "../../actions/items/getOnTrade";

import OnTradeItem from "../../components/onTradeItem/OnTradeItem";

function Market(props) {
    useEffect(() => {
        props.getOnTrade();
    });
    return (<div>
        {props.itemsOnTrade.forEach((item) => {
            return OnTradeItem(item.name, item.description)
        })}
    </div>);
}


const mapStateToProps = (state) => ({
    itemsOnTrade: state.itemReducer.itemsOnTrade
});

const mapDispatchToProps = (dispatch) => ({
    getOnTrade: bindActionCreators(getOnTrade, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);

Market.defaultProps = {};

Market.propTypes = {};
