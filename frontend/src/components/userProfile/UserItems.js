import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert/Alert';
import List from '../list/List';
import ListItem from '../listItem/ListItem';
import Button from '../button/Button';
import Item from '../item/Item';

export default function UserItems(props) {
  if (props.items.length === 0) {
    return <Alert> This user has no items </Alert>;
  }
  return (
    <List>
      {props.items.map(el => {
        let tradeStyle = el.onTrade ? 'danger' : 'warning';
        let button = <Button
          className={`btn-${tradeStyle}`}
          value={el.onTrade ? 'On Trade' : 'Not On Trade'}/>;
        return (
          <ListItem key={el.Id}>
            <Item item={el} content={button}/>
          </ListItem>
        );
      })}
    </List>
  );
}
UserItems.defaultProps = {
  items: [],
};

UserItems.propTypes = {
  items: PropTypes.array,
};
