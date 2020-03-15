import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';

const Profile = ({ profile: { profile, loading } }) => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='d-sm-flex align-items-center justify-content-between mb-4'>
          <h1 className='h3 mb-0 text-gray-800'>Profile</h1>
        </div>
        {profile === null && loading ? (
          <Spinner />
        ) : (
          <Fragment>
            {profile === null ? (
              <Fragment>
                <p>You have not created a profile. Create your profile</p>
                <Link className='btn btn-primary' to='/create-profile'>
                  Create Profile
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <div className='col-xl-12 col-md-12 mb-12'>
                  <div className='card shadow mb-4'>
                    <div className='card-header py-3 d-sm-flex align-items-center justify-content-between mb-4'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        {profile.user.name}
                      </h6>
                      <Fragment>
                        <Link
                          className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
                          to='/edit-profile'
                        >
                          Edit Profile
                        </Link>
                      </Fragment>
                    </div>
                    <div className='card-body'>
                      <div className='text-center'>
                        <img
                          className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                          src={profile.photo}
                          style={{ width: '300px' }}
                          alt='Profile'
                        />
                      </div>
                      <div className='text-center'>
                        <p>
                          <i class='fas fa-code-branch'></i> {profile.title}
                        </p>
                      </div>
                      <div className='text-center'>
                        <p>
                          <i class='fas fa-briefcase'></i> {profile.company}
                        </p>
                      </div>
                      <div className='text-center'>
                        <p>
                          <i class='fas fa-globe'></i>{' '}
                          <Link to={profile.website}>{profile.website}</Link>
                        </p>
                      </div>
                      <div className='text-center'>
                        <p>
                          <i class='fas fa-heart'></i> {profile.status}
                        </p>
                      </div>
                      <div className='text-center'>
                        <p>
                          <i class='fas fa-code'></i> {profile.skills}
                        </p>
                      </div>
                      <div className='text-center'>
                        <p>
                          <i class='fas fa-address-card'></i> {profile.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, null)(Profile);
