import React, { Fragment } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Main from './Main';

const Container = () => {
  return (
    <Fragment>
      <div id='wrapper'>
        <Sidebar />
        <div id='content-wrapper' className='d-flex flex-column'>
          <Navbar />
          <Main />
        </div>
      </div>
    </Fragment>
  );
};

export default Container;
