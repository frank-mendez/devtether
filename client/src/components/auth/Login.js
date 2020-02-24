import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12 col-md-9'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>Welcome Back!</h1>
                      </div>
                      <form className='user' onSubmit={e => onSubmit(e)}>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control form-control-user'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='password'
                            className='form-control form-control-user'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                          />
                        </div>
                        <button
                          type='submit'
                          className='btn btn-primary btn-user btn-block'
                        >
                          Login
                        </button>
                      </form>
                      <hr />
                      <div className='text-center'>
                        <Link className='small' to='/register'>
                          Create an Account!
                        </Link>
                      </div>
                    </div>
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

export default Login;
