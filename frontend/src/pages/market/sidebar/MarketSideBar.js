import InputFieldWithTitle from '../../../components/form/InputFieldWithTitle';
import SelectList from '../../../components/selectList/SelectList';
import Button from '../../../components/button/Button';
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function MarketSideBar(props) {
  return <aside className='market-sidebar'>
    <InputFieldWithTitle
      value={props.userID}
      name={'userID'}
      onChange={props.handleEvent}
      title={'User Id'}
    />
    <SelectList
      currentValue={props.category}
      onChange={props.handleEvent}
      list={['Any', ...props.categoryList]}
      listLabel={'Category:'}
      listName={'category'}
    />
    <Button
      className={`fas fa-toggle-${props.newOnTop ? 'on' : 'off'} fa-3x`}
      value={'New on top'}
      onButtonClick={props.onToggle}
    />
    <Button
      onButtonClick={props.handleSubmit}
      className={'btn-dark'}
      value={'Search'}
    />
  </aside>;
}

MarketSideBar.defaultProps = {
  userID: '',
  category: '',
  categoryList: [],
  newOnTop: true,
  onToggle: () => {
  },
  handleSubmit: () => {
  },
  handleEvent: () => {
  },
};

MarketSideBar.propTypes = {
  userID: PropTypes.string,
  category: PropTypes.string,
  categoryList: PropTypes.array,
  newOnTop: PropTypes.bool,
  onToggle: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleEvent: PropTypes.func,
};