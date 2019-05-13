import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';
import Button from '../button/Button';

export default function Item(props) {
  return (
    <Card image={props.item.image} content={props.content} name={props.item.sign}
          description={props.item.description} footer={props.item.category}/>
  );
}

Item.defaultProps = {
  item: {},
  content: {},
};

Item.propTypes = {
  item: PropTypes.object,
  content: PropTypes.object,
};
