import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import ProtectedRoute from '../services/protected-routes';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <ProtectedRoute path='/home' component={Dashboard} />
    </Switch>
)

export default Routes;