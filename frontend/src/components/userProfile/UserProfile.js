import React from 'react';
import PropTypes from 'prop-types';
import UserItems from './UserItems';

export default function UserProfile(props) {
  return (
    <div className={'profile_info'}>
      <span>
        <h4>User ID:</h4>
        <h5>{props.userId}</h5>
        <UserItems items={props.items}/>
      </span>
    </div>
  );
}

UserProfile.defaultProps = {
  userId: '',
  items: [],
};

UserProfile.propTypes = {
  userId: PropTypes.string,
  items: PropTypes.array,
};
