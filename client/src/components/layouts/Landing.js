import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container-fluid' id='landing'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to='/'>
            <i className='fab fa-connectdevelop'></i> DevTether
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'></ul>
            <ul className='navbar-nav my-2 my-lg-0'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Developers <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='row justify-content-md-center landing-header p-50'>
          <div className='col-md-8 text-center'>
            <img
              alt='svg graphics'
              className='img-fluid'
              src='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582724282/devtether/img/undraw_welcome_cats_thqn.svg'
            />
            <h1>Welcome to DevTether</h1>
            <h6>
              Create custom post, measure social engagement, monitor and connect
              to other developers, publish collaborations, and attend live
              events
            </h6>
          </div>
        </div>
        <div className='row p-50'>
          <div className='col-xs-12 col-lg-6'>
            <img
              alt='svg graphics'
              className='img-fluid'
              src='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582724365/devtether/img/undraw_public_discussion_btnw.svg'
            />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <h2 className='mt-50'>Create custom post</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className='row p-50'>
          <div className='col-xs-12 col-lg-6'>
            <h2 className='mt-50'>Measure social engagement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='col-xs-12 col-lg-6'>
            <img
              alt='svg graphics'
              className='img-fluid'
              src='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582724449/devtether/img/undraw_lost_online_wqob.svg'
            />
          </div>
        </div>
        <div className='row p-50 section-3'>
          <div className='col-xs-12 col-lg-4'>
            <img
              alt='svg graphics'
              className='img-fluid'
              src='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582725738/devtether/img/undraw_meet_the_team_e5b7.svg'
            />
            <h4 className='mt-50'>Monitor and connect to other developers</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <h4 className='mt-50'>Publish collaborations</h4>
            <p>
              Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <img
              alt='svg graphics'
              className='img-fluid'
              src='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582725846/devtether/img/undraw_shared_workspace_hwky.svg'
            />
          </div>
          <div className='col-xs-12 col-lg-4'>
            <img
              alt='svg graphics'
              className='img-fluid'
              src='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582725818/devtether/img/undraw_remotely_2j6y.svg'
            />
            <h4 className='mt-50'>Attend live events</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Landing);
