import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class UserProfile extends React.Component {
    renderItems = () => {
        if (this.props.items.length === 0) {
            return <span className={"alert alert-warning"}> You have no items </span>
        }
        return <ul> {
            this.props.items.map(el => {
                let tradeStyle = el.onTrade ? 'danger' : 'warning';
                return (<li className='list-group-item mb-1' key={el.id}>
                        {el.sign}: {el.description} | {el.category}
                        <button type="button" className={`btn btn-${tradeStyle} trade__btn`}
                                onClick={()=>{this.props.onItemClick(el.id)}}>
                            {el.onTrade ? 'Stop Trading' : 'Trade this'}</button>
                    </li>
                )
            })}
        </ul>
    };

    render() {
        return (
            <div className={'profile_info'}>
                <span>
                    <h4>User ID:</h4>
                    <h5>{this.props.userId}</h5>
                    <h4>Inventory ID:</h4>
                    <h5>{this.props.inventoryId}</h5>
                    {this.renderItems()}
                </span>
            </div>
        );
    }
}


UserProfile.defaultProps = {
    userId: '',
    inventoryId: '',
    onItemClick: () => {},
    items: []
};

UserProfile.propTypes = {
    userId: PropTypes.string,
    inventoryId: PropTypes.string,
    onItemClick: PropTypes.func,
    items: PropTypes.array
};