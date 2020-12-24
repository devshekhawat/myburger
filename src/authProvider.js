import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { azureId } from './config';
// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/12077ea8-3f59-4127-a02a-2b2dc0e36027',
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