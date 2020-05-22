module.exports = {
  service: {
    endpoint: {
      url: 'https://api.github.com/graphql', // defaults to http://localhost:4000
      headers: {
        // optional
        authorization: 'demka99 dMWaz44T3sTbpD6_UL-OfQ'
      },
      skipSSLValidation: true // optional, disables SSL validation check
    }
  }
};