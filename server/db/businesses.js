const connection = require('./connection')

function getBusinesses(db = connection) {
  return db('businesses')
    .select(
      'businesses.*',
      'auth0_ID as auth0Id',
      'reliability_positive as reliabilityPositive',
      'reliability_negative as reliabilityNegative'
    )
    .then((businesses) => {
      return businesses.map((business) => {
        return {
          ...business,
        }
      })
    })
}

module.exports = {
  getBusinesses,
}
