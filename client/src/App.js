import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';
import Routes from './components/routing/Routes';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth/LoadUser';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
