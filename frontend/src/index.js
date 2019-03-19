import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from '../pages/singup/SignUp';
import SignIn from '../pages/signin/SignIn';
import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
    </BrowserRouter>,
    document.getElementById('app')
);
