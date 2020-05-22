module.exports = {
  service: {
    endpoint: {
      url: 'http://localhost:4000/graphql', // defaults to http://localhost:4000
      headers: {
        // optional
        authorization: 'VN6b21mUQBCBwE_2lTDIWw'
      },
      skipSSLValidation: true // optional, disables SSL validation check
    }
  }
};