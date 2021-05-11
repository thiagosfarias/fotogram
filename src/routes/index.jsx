import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from './../pages/register/Register';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    )
}

export default Routes