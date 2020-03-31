import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
      </Switch>
    </section>
  );
};

Routes.propTypes = {};

export default Routes;
