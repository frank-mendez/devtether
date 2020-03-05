import React, { Fragment } from 'react';
import Sidebar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import Profile from './Profile';

const ContainerProfile = () => {
  return (
    <Fragment>
      <div id='wrapper'>
        <Sidebar />
        <div id='content-wrapper' className='d-flex flex-column'>
          <Navbar />
          <Profile />
        </div>
      </div>
    </Fragment>
  );
};

export default ContainerProfile;
