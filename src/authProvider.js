import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { azureId } from './config';
// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: azureId,
    redirectUri: window.location.origin + "/private"
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
  tokenRefreshUri: window.location.origin + '/private'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)