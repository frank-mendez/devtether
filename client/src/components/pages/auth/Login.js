import React, { useState } from 'react';
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
  EuiButton
} from '@elastic/eui';

const Login = () => {
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
                <EuiCallOut
                  title='Invalid Credentials'
                  color='danger'
                  iconType='alert'
                ></EuiCallOut>
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
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Login;
