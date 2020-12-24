/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import Spinner from '../UI/Spinner/Spinner';

const Profile = ({ accountInfo, azureLogout }) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  const oktaLogout = async () => {
    authService.logout('/');
  };

  if (accountInfo) {
    return (
      <div>
        <h1>You have logged in with Microsoft Azure</h1>
        <table>
          <thead>
            <tr>
              <th>Claim</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>Name: </td>
              <td>{accountInfo && accountInfo.account.name}</td>
            </tr>
            <tr >
              <td>User Name: </td>
              <td>{accountInfo && accountInfo.account.userName}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={azureLogout}>Logout</button>
      </div>
    );
  }
  else if (!userInfo) {
    return (
      <div>
        <p>Fetching user profile...</p>
        <Spinner/>
        <button onClick={oktaLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>You have logged in with Okta</h1>
        <p>
          Below is the information from your ID token which was obtained during the &nbsp;
          <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a>
          {' '}
          and is now stored in local storage.
        </p>
        <p>
          This route is protected with the
          <code>&lt;SecureRoute&gt;</code>
          {' '}
          component, which will ensure that this page cannot be accessed until you have authenticated.
        </p>
        <table>
          <thead>
            <tr>
              <th>Claim</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userInfo).map((claimEntry) => {
              const claimName = claimEntry[0];
              const claimValue = claimEntry[1];
              const claimId = `claim-${claimName}`;
              return (
                <tr key={claimName}>
                  <td>{claimName}</td>
                  <td id={claimId}>{claimValue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={oktaLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
