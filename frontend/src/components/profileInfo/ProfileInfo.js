import React from 'react';
import PropTypes from 'prop-types';

export default class ProfileInfo extends React.Component {
    renderItems=()=>{
        return <ul> {
            this.props.items.length === 0 ? "" :
                this.props.items.map(el => (
                    <li className='list-group-item mb-1' key={el.id}>
                        {el.sign}: {el.category}
                    </li>
                ))}
        </ul>
    };

    render() {
        return (
            <div className={"Profile Info"}>
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


ProfileInfo.defaultProps = {
    userId:'',
    inventoryId:'',
    items:[]
};

ProfileInfo.propTypes = {
    userId: PropTypes.string,
    inventoryId: PropTypes.string,
    items: PropTypes.array
};