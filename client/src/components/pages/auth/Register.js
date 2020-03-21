import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  EuiButton,
  EuiFieldText,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiFieldPassword,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCallOut,
  EuiLink
} from '@elastic/eui';

import { register } from '../../../actions/auth/Register';

const Register = ({ isAuthenticated, register, error }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    setIsLoading(true);
    console.log('email validation: ', emailValidation(email));
    if (name.length === 0) {
      setShowErrors(true);
      setErrors(['Name field is required']);
      setIsLoading(false);
    } else if (email.length === 0) {
      setShowErrors(true);
      setErrors(['Email field is required']);
      setIsLoading(false);
    } else if (!emailValidation(email)) {
      setShowErrors(true);
      setErrors(['Email is not valid']);
      setIsLoading(false);
    } else if (password.length === 0 && password.length < 6) {
      setShowErrors(true);
      setErrors(['Password field is required and minimum of 6 characters']);
      setIsLoading(false);
    } else if (password !== password2) {
      setShowErrors(true);
      setErrors(['Password does not match']);
      setIsLoading(false);
    } else {
      register({ name, email, password });
      if (error !== null) {
        setIsLoading(false);
      }
    }
  };

  const emailValidation = email => {
    let validated = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (validated != null) {
      return true;
    } else {
      return false;
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <EuiPage style={{ height: '100vh' }}>
        <EuiPageBody>
          <EuiPageContent
            style={{ width: '400px', textAlign: 'center' }}
            paddingSize='l'
            panelPaddingSize='l'
            className='auth-page-container'
            verticalPosition='center'
            horizontalPosition='center'
          >
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>Register</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiFlexGroup>
                <EuiFlexItem>
                  {showErrors && (
                    <EuiCallOut
                      title={errors}
                      color='danger'
                      iconType='alert'
                    ></EuiCallOut>
                  )}
                  {error && (
                    <EuiCallOut
                      title={error[0].msg}
                      color='danger'
                      iconType='alert'
                    ></EuiCallOut>
                  )}
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFieldText
                    value={name}
                    placeholder='Name'
                    icon='user'
                    name='name'
                    onChange={e => onChange(e)}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFieldText
                    value={email}
                    placeholder='Email'
                    icon='email'
                    name='email'
                    onChange={e => onChange(e)}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFieldPassword
                    value={password}
                    name='password'
                    placeholder='Password'
                    aria-label='Use aria labels when no actual label is in use'
                    onChange={e => onChange(e)}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFieldPassword
                    value={password2}
                    name='password2'
                    placeholder='Confirm Password'
                    aria-label='Use aria labels when no actual label is in use'
                    onChange={e => onChange(e)}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiButton
                    size='s'
                    iconType='arrowRight'
                    iconSide='right'
                    type='submit'
                    isLoading={isLoading}
                    onClick={e => onSubmit(e)}
                  >
                    Register
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup alignItems='center'>
                <EuiFlexItem component='span'>
                  <EuiLink href='/login'>Already have an account?</EuiLink>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { register })(Register);
