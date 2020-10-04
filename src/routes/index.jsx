import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Dashboard} />
    </Switch>
)

export default Routes;