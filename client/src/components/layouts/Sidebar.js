import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'
    >
      <Link
        className='sidebar-brand d-flex align-items-center justify-content-center'
        to='/dashboard'
      >
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fab fa-connectdevelop'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>DevTether</div>
      </Link>
      <hr className='sidebar-divider my-0' />
      <li className='nav-item active'>
        <Link className='nav-link' to='/dashboard'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className='sidebar-divider' />
      <div className='sidebar-heading'>Profiles</div>
      <li className='nav-item'>
        <Link
          className='nav-link collapsed'
          to='#'
          data-toggle='collapse'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'
        >
          <i className='fas fa-fw fa-cog'></i>
          <span>Profile</span>
        </Link>
        <div
          id='collapseTwo'
          className='collapse'
          aria-labelledby='headingTwo'
          data-parent='#accordionSidebar'
        >
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>User Profile:</h6>
            <Link className='collapse-item' to='/edit-profile'>
              Edit Profile
            </Link>
            <Link className='collapse-item' to='/profile'>
              View Profile
            </Link>
          </div>
        </div>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link collapsed'
          to='#'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'
        >
          <i className='fas fa-fw fa-wrench'></i>
          <span>Developer Profiles</span>
        </Link>
        <div
          id='collapseUtilities'
          className='collapse'
          aria-labelledby='headingUtilities'
          data-parent='#accordionSidebar'
        >
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Dev Profiles:</h6>
            <Link className='collapse-item' to='/following'>
              Following
            </Link>
            <Link className='collapse-item' to='/followers'>
              Followers
            </Link>
            <Link className='collapse-item' to='/developers'>
              Discover Dev Profiles
            </Link>
          </div>
        </div>
      </li>
      <hr className='sidebar-divider' />
      <div className='sidebar-heading'>Network</div>
      <li className='nav-item active'>
        <Link className='nav-link' to='/community'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dev Community</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
