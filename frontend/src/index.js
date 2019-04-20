import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';

import SignUp from './pages/singup/signUp';
import SignIn from './pages/signin/signIn';
import Me from './pages/me/me';
import AddItem from './pages/addItem/AddItem';
import Market from './pages/market/Market';
import UserPage from './pages/userPage/UserPage';
import {newStore} from './store/store';

import './vendor/normalize.css';
import NavBar from "./components/navBar/NavBar";
import Main from './components/main/Main';

const history = createBrowserHistory();
const store = newStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <NavBar/>
            <Route exact path='/' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Main>
                <Route path='/me' component={Me}/>
                <Route path='/additem' component={AddItem}/>
                <Route path='/market' component={Market}/>
                <Route path="/user/:id" component={UserPage}/>
            </Main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
