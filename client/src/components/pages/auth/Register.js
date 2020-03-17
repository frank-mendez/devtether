import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiFieldPassword
} from '@elastic/eui';

import { register } from '../../../actions/auth/Register';

const Register = ({ isAuthenticated, register }) => {
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
    if (password !== password2) {
      setShowErrors(true);
      setErrors(errors.push('Password does not match'));
    } else {
      register({ name, email, password });
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
              <EuiForm
                style={{ width: '300px' }}
                isInvalid={showErrors}
                error={errors}
              >
                <EuiFormRow isInvalid={showErrors}>
                  <EuiFieldText
                    value={name}
                    placeholder='Name'
                    icon='user'
                    name='name'
                    onChange={e => onChange(e)}
                  />
                </EuiFormRow>
                <EuiSpacer />
                <EuiFormRow isInvalid={showErrors}>
                  <EuiFieldText
                    value={email}
                    placeholder='Email'
                    icon='email'
                    name='email'
                    onChange={e => onChange(e)}
                  />
                </EuiFormRow>
                <EuiSpacer />
                <EuiFormRow isInvalid={showErrors}>
                  <EuiFieldPassword
                    value={password}
                    name='password'
                    placeholder='Password'
                    aria-label='Use aria labels when no actual label is in use'
                    onChange={e => onChange(e)}
                  />
                </EuiFormRow>
                <EuiSpacer />
                <EuiFormRow isInvalid={showErrors}>
                  <EuiFieldPassword
                    value={password2}
                    name='password2'
                    placeholder='Confirm Password'
                    aria-label='Use aria labels when no actual label is in use'
                    onChange={e => onChange(e)}
                  />
                </EuiFormRow>
                <EuiSpacer />

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
              </EuiForm>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
