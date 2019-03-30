import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';

import SignUp from './pages/singup/signUp';
import SignIn from './pages/signin/signIn';
import Me from './pages/me/me';
import AddItem from './pages/addItem/addItem';
import {newStore} from './store/store';

import './vendor/normalize.css';

const history = createBrowserHistory();
const store = newStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path='/' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/me' component={Me}/>
            <Route path='/additem' component={AddItem}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
