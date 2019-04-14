import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

// 1. Extract all not connected to this component classes into separate component
// 2. Fix formating of your components
// 3. Extract 'renderItems' into its separate component
// --mrurenko 2019-04-06
export default class MyProfile extends React.Component {
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
                    {this.renderItems()}
                </span>
            </div>
        );
    }
}


MyProfile.defaultProps = {
    userId: '',
    onItemClick: () => {},
    items: []
};

MyProfile.propTypes = {
    userId: PropTypes.string,
    onItemClick: PropTypes.func,
    items: PropTypes.array
};
