import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar';
import Navbar from './components/layouts/Navbar';
import Main from './components/layouts/Main';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <div id='wrapper'>
        <Sidebar />
        <div id='content-wrapper' className='d-flex flex-column'>
          <Navbar />
          <Main />
        </div>
      </div>
    </Fragment>
  </Router>
);

export default App;
