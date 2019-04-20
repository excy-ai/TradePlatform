import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/list/List';
import ListItem from '../../components/listItem/ListItem';
import Alert from '../../components/alert/Alert';

export default function UserProfile(props) {
    let renderItems = () => {
        if (props.items.length === 0) {
            return <Alert> This user has no items </Alert>
        }
        return <List> {
            props.items.map(el => {
                let tradeStyle = el.onTrade ? 'danger' : 'warning';
                return (<ListItem key={el.id}>
                        {el.sign}: {el.description} | {el.category}
                        <span className={`btn btn-${tradeStyle}`}>
                            {el.onTrade ? 'On Trade' : 'Not On Trade'}</span>
                    </ListItem>
                )
            })}
        </List>
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

