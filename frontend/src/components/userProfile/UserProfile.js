import React from 'react';
import PropTypes from 'prop-types';

export default function UserProfile(props){
    let renderItems = () => {
        if (props.items.length === 0) {
            return <span className={"alert alert-warning"}> This user has no items </span>
        }
        return <ul> {
            props.items.map(el => {
                let tradeStyle = el.onTrade ? 'danger' : 'warning';
                return (<li className='list-group-item mb-1' key={el.id}>
                        {el.sign}: {el.description} | {el.category}
                        <span className={`btn btn-${tradeStyle}`}>
                            {el.onTrade ? 'On Trade' : 'Not On Trade'}</span>
                    </li>
                )
            })}
        </ul>
    };
    return (
        <div className={'profile_info'}>
                <span>
                    <h4>User ID:</h4>
                    <h5>{props.userId}</h5>
                    {renderItems()}
                </span>
        </div>
    );
}


UserProfile.defaultProps = {
    userId: '',
    items: []
};

UserProfile.propTypes = {
    userId: PropTypes.string,
    items: PropTypes.array
};

