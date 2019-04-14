import React from 'react';
import PropTypes from 'prop-types';

function OnTradeItem({name, description, image}) {
    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={image || "..."} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Trade</a>
            </div>
        </div>
    );
}


OnTradeItem.defaultProps = {};

OnTradeItem.propTypes = {};
