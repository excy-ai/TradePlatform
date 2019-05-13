import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getOnTrade from '../../store/actions/items/get/onTrade/getOnTrade';

import OnTradeItem from '../../components/onTradeItem/OnTradeItem';
import Alert from '../../components/alert/Alert';
import MarketSideBar from './sidebar/MarketSideBar';
import getCategorys from '../../store/actions/items/get/categorys/getCategorys';

import { isUUID } from '../../utils/Matcher';

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
    let category = this.state.category === 'Any' ? undefined : this.state.category;
    let newStateSearchBlock = {
      category,
      order: this.state.newOnTop ? 'DESC' : 'ASC',
    };
    let callback = () => {
      this.props.getOnTrade(this.state.currentSearchBlock);
    };
    if (this.state.userID.length !== 0 && isUUID(this.state.userID)) {
      this.setState({
        currentSearchBlock: {
          userID: this.state.userID,
          ...newStateSearchBlock,
        }, callback,
      });
    } else {
      this.setState({
        currentSearchBlock: {
          ...newStateSearchBlock,
        },
      }, callback);
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
        <MarketSideBar
          handleEvent={this.handleEvent}
          userID={this.state.userID}
          category={this.state.category}
          categoryList={this.props.categoryList}
          newOnTop={this.state.newOnTop}
          onToggle={() => {
            this.setState({ newOnTop: !this.state.newOnTop });
          }}
          handleSubmit={this.handleSubmit}
        />
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
