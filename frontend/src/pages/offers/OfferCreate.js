import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../components/button/Button';
import ListItem from '../../components/listItem/ListItem';
import List from '../../components/list/List';
import setSelected from '../../store/actions/offers/creating/setSelected';
import Item from '../../components/item/Item';

function OfferCreate(props) {
  useEffect(() => {
    if (!props.creating) {
      props.history.push('/me');
    }
  }, []);
  const itemInfo = (item) => {
    return {
      Id: item.Id,
      image: item.image,
      sign: item.sign,
      description: item.description,
      category: item.category,
      userId: item.user_Id,
    };
  };

  return (<React.Fragment>
    <h2>Now select Item from your inventory:</h2>
    <List>
      {props.items.map(el => {
        const button = <Button
          type="button"
          className={`btn-dark`}
          onButtonClick={() => {
            props.setSelected(itemInfo(el));
            props.history.push('/offers/creating/confirmation');
          }}
          value={'Select'}
        />;
        return (
          <ListItem key={el.Id}>
            <Item item={el} content={button}/>
          </ListItem>
        );
      })}
    </List>
  </React.Fragment>);
}

const mapStateToProps = state => ({
  items: state.itemReducer.items,
  creating: state.offerReducer.creating,
});

const mapDispatchToProps = dispatch => ({
  setSelected: bindActionCreators(setSelected, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferCreate);
