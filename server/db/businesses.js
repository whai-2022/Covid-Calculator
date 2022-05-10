// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

function getBusinesses(db = connection) {
  return db('businesses')
    .select(
      'id',
      'auth0_ID as auth0Id',
      'name',
      'address',
      'category',
      'reliability_positive as reliabilityPositive',
      'reliability_negative as reliabilityNegative',
      'rating',
      'suburb',
      'city'
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
