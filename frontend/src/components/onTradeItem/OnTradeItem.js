import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';

export default function OnTradeItem(props) {
  const style = {
    margin: '5px 0 5px 10px',
    maxWidth: 'calc(50% - 20px)',
  };
  let button = <NavLink to={'/user/' + props.userId}>offerer</NavLink>;

  return (<React.Fragment>
      <Card style={style} image={props.image} content={button} name={props.name}
            description={props.description} footer={props.category}/>
    </React.Fragment>
  );
}

OnTradeItem.defaultProps = {
  image: '...',
  name: '',
  description: '',
  category: ''
};

OnTradeItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};
