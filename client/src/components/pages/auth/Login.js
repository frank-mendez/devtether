import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth/Login';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiFieldPassword,
  EuiCallOut,
  EuiButton,
  EuiLink
} from '@elastic/eui';

const Login = ({ login, isAuthenticated, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <EuiPage style={{ height: '700px' }}>
      <EuiPageBody>
        <EuiPageContent
          style={{ width: '400px', textAlign: 'center' }}
          verticalPosition='center'
          horizontalPosition='center'
        >
          <EuiPageContentHeader
            style={{ display: 'block', textAlign: 'center' }}
          >
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Welcome to DevTether</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiFlexGroup>
              <EuiFlexItem>
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
                  icon='user'
                  value={email}
                  onChange={e => onChangeEmail(e)}
                  placeholder='Email'
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFieldPassword
                  placeholder='Password'
                  value={password}
                  onChange={e => onChangePassword(e)}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiButton fill isLoading={false}>
                  Login
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup alignItems='center'>
              <EuiFlexItem component='span'>
                <EuiLink href='/register'>Signup</EuiLink>
              </EuiFlexItem>
              <EuiFlexItem component='span'>
                <EuiLink href='/forgot-password'>Forgot Password</EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { login })(Login);
