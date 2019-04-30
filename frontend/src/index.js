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
import { newStore } from './store/store';

import './vendor/normalize.css';
import NavBar from './components/navBar/NavBar';
import Main from './components/main/Main';

const history = createBrowserHistory();
const store = newStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NavBar/>
      <Route exact path="/" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Main>
        <Route path="/me" component={Me}/>
        <Route path="/offers" component={Offers}/>
        <Route path="/additem" component={AddItem}/>
        <Route path="/market" component={Market}/>
        <Route path="/user/:id" component={UserPage}/>
      </Main>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
