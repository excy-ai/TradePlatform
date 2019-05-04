import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getOnTrade from '../../actions/items/getOnTrade';

import OnTradeItem from '../../components/onTradeItem/OnTradeItem';
import Alert from '../../components/alert/Alert';
import Form from '../../components/form/Form';
import Button from '../../components/button/Button';
import InputFieldWithTitle from '../../components/form/InputFieldWithTitle';
import SelectList from '../../components/selectList/SelectList';
import getCategorys from '../../actions/items/getCategorys';
import './style.css';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      category: 'Any',
      newOnTop: true,
      currentSearchBlock: {},
    };
  }

  handleEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let category = this.state.category === 'Any'
      ? undefined : this.state.category;
    if (this.state.userID.length !== 0 &&
      this.state.userID.match('[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}')) {
      this.setState({
        currentSearchBlock: {
          userID: this.state.userID,
          category,
          order: this.state.newOnTop ? 'DESC' : 'ASC',
        },
      }, () => {
        this.props.getOnTrade(this.state.currentSearchBlock);
      });
    } else {
      this.setState({
        currentSearchBlock: {
          category,
          order: this.state.newOnTop ? 'DESC' : 'ASC',
        },
      }, () => {
        this.props.getOnTrade(this.state.currentSearchBlock);
      });
    }
  };

  componentDidMount() {
    this.props.getOnTrade({});
    this.props.getCategorys();
  }

  render() {
    let items = <Alert>Something went wrong</Alert>;
    if (this.props.itemsOnTrade.length === 0) {
      items = (
        <div className={'market_alert_no_items'}>
          <Alert>no items on trade</Alert>
        </div>
      );
    } else {
      items = (
        <React.Fragment>
          {this.props.itemsOnTrade.map(item => {
            return (
              <OnTradeItem
                history={this.props.history}
                name={item.sign}
                description={item.description}
                userId={item.user_Id}
                Id={item.Id}
                key={item.Id}
                image={item.image}
                category={item.category}
              />
            );
          })}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div
          style={{
            display: 'inline-block',
            float: 'right',
            marginTop: '15px',
            marginRight: '15px',
          }}
        >
          <InputFieldWithTitle
            value={this.state.userID}
            name={'userID'}
            onChange={this.handleEvent}
            title={'User Id'}
          />
          <SelectList
            currentValue={this.state.category}
            onChange={this.handleEvent}
            list={['Any', ...this.props.categoryList]}
            listLabel={'Category:'}
            listName={'category'}
          />
          <Button
            className={`fas fa-toggle-${this.state.newOnTop ? 'on' : 'off'} fa-3x`}
            value={'New on top'}
            onButtonClick={() => {
              this.setState({ newOnTop: !this.state.newOnTop });
            }}
          />
          <Button
            onButtonClick={this.handleSubmit}
            className={'btn-dark'}
            value={'Search'}
          />
        </div>
        {items}
      </React.Fragment>
    );
  }
}

Market.defaultProps = {};

Market.propTypes = {};

const mapStateToProps = state => ({
  categoryList: state.itemReducer.categoryList.map(item => item.title),
  itemsOnTrade: state.marketReducer.itemsOnTrade,
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getCategorys: bindActionCreators(getCategorys, dispatch),
  getOnTrade: bindActionCreators(getOnTrade, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Market);
