import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/List';
import ListItem from '../listItem/ListItem';
import Alert from '../alert/Alert';
import Card from '../card/Card';
import Button from '../button/Button';

import './style.css';

export default function MyProfile(props) {
  let renderItems = () => {
    const style = {
      margin: '5px 0 5px 10px',
      maxWidth: 'calc(50% - 20px)',
    };
    return (
      <List>
        {props.items.map(el => {
          const tradeStyle = el.onTrade ? 'danger' : 'warning';
          const button = <Button
            type="button"
            className={`btn-${tradeStyle} trade__btn`}
            onButtonClick={onClickBody => {
              props.onItemClick(onClickBody);
            }}
            onClickBody={el.Id}
            value={el.onTrade ? 'Stop Trading' : 'Trade this'}
          />;
          return (
            <ListItem className={'inv_item'} key={el.Id}>
              <Card style={style} image={el.image} content={button} name={el.sign}
                    description={el.description} footer={el.category}/>
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
  onItemClick: () => {
  },
  items: [],
};

MyProfile.propTypes = {
  userId: PropTypes.string,
  onItemClick: PropTypes.func,
  items: PropTypes.array,
};
