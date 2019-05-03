import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../components/button/Button';
import ListItem from '../../components/listItem/ListItem';
import Card from '../../components/card/Card';
import List from '../../components/list/List';
import setSelected from '../../actions/offers/creatingPhase/setSelected';

function OfferCreate(props) {
  useEffect(() => {
    if (!props.creating) {
      props.history.push('/me');
    }
  });
  return (<React.Fragment>
    <h2>Now select Item from your inventory:</h2>
    <List>
      {props.items.map(el => {
        const button = <Button
          type="button"
          className={`btn-dark`}
          onButtonClick={onClickBody => {
            props.setSelected(onClickBody);
            props.history.push('/offers/creating/confirmation');
          }}
          onClickBody={{
            Id: el.Id,
            image: el.image,
            sign: el.name,
            description: el.description,
            category: el.category,
          }}
          value={'Select'}
        />;
        return (
          <ListItem className={'inv_item'} key={el.Id}>
            <Card image={el.image} content={button} name={el.sign}
                  description={el.description} footer={el.category}/>
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