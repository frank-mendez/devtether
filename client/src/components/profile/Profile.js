import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layouts/Spinner';

const Profile = ({ getCurrentProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

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
                <div className='row'>
                  <div className='col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4'>
                    <img
                      alt='Profile'
                      className='img-fluid rounder-circle'
                      src={profile.photo}
                    />
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
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
