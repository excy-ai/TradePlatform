import React from 'react';
import PropTypes from 'prop-types';
import MyItems from '../myProfile/MyItems';

export default function MyProfile(props) {
  return (
    <div className={'profile_info'}>
      <h4>My ID:</h4>
      <h5>{props.userId}</h5>
      <MyItems items={props.items} onItemClick={props.onItemClick}/>
    </div>
  );
}

MyProfile.defaultProps = {
  userId: '',
  onItemClick: () => {
  },
  items: [],
};

MyProfile.propTypes = {
  userId: PropTypes.string,
  onItemClick: PropTypes.func,
  items: PropTypes.array,
};
