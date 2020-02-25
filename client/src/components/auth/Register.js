import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../layouts/Alert';

const Register = ({ setAlert, register, isAuthenticated  }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password does not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='card o-hidden border-0 shadow-lg my-5'>
          <div className='card-body p-0'>
            <div className='row'>
              <div className='col-lg-5 d-none d-lg-block bg-register-image'></div>
              <div className='col-lg-7'>
                <div className='p-5'>
                  <div className='text-center'>
                    <h1 className='h4 text-gray-900 mb-4'>
                      Create an Account!
                    </h1>
                  </div>
                  <Alert />
                  <form className='user' onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control form-control-user'
                        placeholder='Full Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control form-control-user'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group row'>
                      <div className='col-sm-6 mb-3 mb-sm-0'>
                        <input
                          type='password'
                          className='form-control form-control-user'
                          placeholder='Password'
                          name='password'
                          value={password}
                          onChange={e => onChange(e)}
                        />
                      </div>
                      <div className='col-sm-6'>
                        <input
                          type='password'
                          className='form-control form-control-user'
                          placeholder='Repeat Password'
                          name='password2'
                          value={password2}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary btn-user btn-block'
                    >
                      Register Account
                    </button>
                  </form>
                  <hr />
                  <div className='text-center'>
                    <Link className='small' to='/login'>
                      Already have an account? Login!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
