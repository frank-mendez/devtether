import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
