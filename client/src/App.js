import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Dashboard from './components/pages/Dashboard';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth/LoadUser';
import setAuthToken from './utils/setAuthToken';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
