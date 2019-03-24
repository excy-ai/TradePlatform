import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUp from '../pages/singup/SignUp';
import SignIn from '../pages/signin/SignIn';
import Me from '../pages/me/Me';


ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/me' component={Me}/>
    </BrowserRouter>,
    document.getElementById('app')
);
