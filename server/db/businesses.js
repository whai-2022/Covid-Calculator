// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

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
