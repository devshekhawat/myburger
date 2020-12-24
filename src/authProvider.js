import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { azureId, azureAuthority } from './config';
// Msal Configurations
const config = {
  auth: {
    authority: azureAuthority,
    clientId: azureId,
    redirectUri: "http://localhost:3000/private",
    navigateToLoginRequestUrl: false

  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'user.read',
    // 'https://<your-tenant-name>.onmicrosoft.com/<your-application-name>/<scope (i.e. user.read)>'
  ]
}

// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: "http://localhost:3000/private",

}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)