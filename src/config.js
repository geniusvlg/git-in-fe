const CLIENT_ID = process.env.CLIENT_ID || '0oaawcopl4ebL8ONR4x6'
const ISSUER = process.env.ISSUER || 'https://dev-311502.okta.com/oauth2/default'
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:8080/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
  }
}
