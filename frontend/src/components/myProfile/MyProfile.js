import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/List';
import ListItem from '../listItem/ListItem';
import Alert from '../alert/Alert';
import Button from '../button/Button';

import './style.css';

export default function MyProfile(props) {
  let renderItems = () => {
    //TODO: add card class for Item (with img) image.substring("public/".length)
    return (
      <List>
        {' '}
        {props.items.map(el => {
          let tradeStyle = el.onTrade ? 'danger' : 'warning';
          return (
            <ListItem className={'inv_item'} key={el.id}>
              {el.sign}: {el.description} | {el.category}
              <Button
                type="button"
                className={`btn-${tradeStyle} trade__btn`}
                onButtonClick={onClickBody => {
                  props.onItemClick(onClickBody);
                }}
                onClickBody={el.id}
                value={el.onTrade ? 'Stop Trading' : 'Trade this'}
              />
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <div className={'profile_info'}>
      <h4>My ID:</h4>
      <h5>{props.userId}</h5>
      {props.items.length === 0 ? <Alert> You have no items </Alert> : renderItems()}
    </div>
  );
}

MyProfile.defaultProps = {
  userId: '',
  onItemClick: () => {},
  items: [],
};

MyProfile.propTypes = {
  userId: PropTypes.string,
  onItemClick: PropTypes.func,
  items: PropTypes.array,
};
