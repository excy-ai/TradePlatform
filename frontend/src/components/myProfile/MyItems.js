import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert/Alert';
import List from '../list/List';
import TradeButton from '../button/TradeButton';
import ListItem from '../listItem/ListItem';
import Item from '../item/Item';

export default function MyItems(props) {
  return props.items.length === 0 ?
    <Alert> You have no items </Alert> :
    <List>
      {props.items.map(el => {
        const button = <TradeButton
          onTrade={el.onTrade}
          onToggle={() => {
            props.onItemClick(el.Id);
          }}
        />;
        return (
          <ListItem key={el.Id}>
            <Item item={el} content={button}/>
          </ListItem>
        );
      })}
    </List>;
}
MyItems.defaultProps = {
  items: [],
  onItemClick: () => {
  },
};

MyItems.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
};
