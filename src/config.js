const CLIENT_ID = process.env.CLIENT_ID || '0oa2sodbcEQ0YUJTF5d6';
const ISSUER = process.env.ISSUER || 'https://dev-7174179.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};

export const azureId = '251b3d3b-98c2-413d-8400-a348d1e1dfe7';
export const azureAuthority = 'https://login.microsoftonline.com/12077ea8-3f59-4127-a02a-2b2dc0e36027';
