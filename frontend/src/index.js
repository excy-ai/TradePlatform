import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';

import SignUp from './pages/singup/signUp';
import SignIn from './pages/signin/signIn';
import Me from './pages/me/me';
import AddItem from './pages/addItem/addItem';
import Market from './pages/market/Market';
import {newStore} from './store/store';

import './vendor/normalize.css';
import NavBar from "./components/navBar/NavBar";

const history = createBrowserHistory();
const store = newStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <NavBar/>
            <Route exact path='/' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/me' component={Me}/>
            <Route path='/additem' component={AddItem}/>
            <Route path='/market' component={Market}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
