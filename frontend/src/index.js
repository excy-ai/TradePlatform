import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import SignUp from './pages/singup/SignUp';
import SignIn from './pages/signin/SignIn';
import Me from './pages/me/Me';
import AddItem from './pages/addItem/AddItem';
import Market from './pages/market/Market';
import UserPage from './pages/userPage/UserPage';
import Offers from './pages/offers/Offers';
import OfferConfirm from './pages/offers/OfferConfirm';
import OfferCreate from './pages/offers/OfferCreate';
import { newStore } from './store/store';

import './vendor/normalize.css';
import NavBar from './components/navBar/NavBar';
import Main from './components/main/Main';

const history = createBrowserHistory();
const store = newStore();

//TODO:
//<Route path="/offers/creating" component={OfferCreate}/>
// <Route path="/offers/creating/confirmation" component={OfferConfirm}/>
// make in reducer field creating: false, after user clicks button trade on user profile
// it changes to true, after confirmation/cancelling creation it backs to false
// if field false redirect user to me!!!
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NavBar/>
      <Route exact path="/" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Main>
        <Route path="/me" component={Me}/>
        <Route exact path="/offers" component={Offers}/>
        <Route exact path="/offers/creating" component={OfferCreate}/>
        <Route path="/offers/creating/confirmation" component={OfferConfirm}/>
        <Route path="/additem" component={AddItem}/>
        <Route path="/market" component={Market} history={history}/>
        <Route path="/user/:id" component={UserPage}/>
      </Main>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
