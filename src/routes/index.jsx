import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={<Login />}/>
            <Route path="/register" component={<Login />}/>
        </Switch>
    )
}

export default Routes