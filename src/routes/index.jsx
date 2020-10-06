import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NaversAdd from '../pages/NaversAdd';
import NaversEdit from '../pages/NaversEdit';

import ProtectedRoute from '../services/protected-routes';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <ProtectedRoute path='/home' component={Dashboard} />
        <ProtectedRoute path='/create' component={NaversAdd} />
        <ProtectedRoute path='/update' component={NaversEdit} />
    </Switch>
)

export default Routes;