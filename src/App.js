import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import { Security, LoginCallback } from '@okta/okta-react';
import config from './config';

import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from './authProvider';
import Entry from './components/Entry';

class App extends Component {

  render() {
    let routes = (
      <Router>
        <AzureAD provider={authProvider} forceLogin={false}>
          {
            ({ login, logout, authenticationState, error, accountInfo }) => {
              switch (authenticationState) {
                case AuthenticationState.Authenticated:
                  return (
                    <Security {...config.oidc}>
                      <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/private' component={() => <Entry azure={AuthenticationState.Authenticated} accountInfo={accountInfo} logout={logout} />} />
                        <Route path='/login' exact component={() => <Login login={login} />} />
                        <Route path='/login/callback' component={LoginCallback} />
                      </Switch>
                    </Security>
                  );
                case AuthenticationState.Unauthenticated:
                  return (
                    <div>
                      {error && console.log(error)}
                      {error && <p><span>An error occurred during authentication, please try again!</span></p>}
                      <Security {...config.oidc}>
                        <Switch>
                          <Route path='/' exact component={Home} />
                          <Route path='/private' component={Entry} />
                          <Route path='/login' exact component={() => <Login login={login} />} />
                          <Route path='/login/callback' component={LoginCallback} />
                        </Switch>
                      </Security>
                    </div>
                  );
                case AuthenticationState.InProgress:
                  return (<p>Authenticating...</p>);
                default:
                  return (<p>Something went wrong. Please check your internet!</p>);
              }
            }
          }
        </AzureAD>
      </Router>
    );

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;