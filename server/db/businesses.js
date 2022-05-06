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
      'reliabilityScore',
      'rating',
      'suburb',
      'city'
    )
    .then((businesses) => {
      console.log(businesses)
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
