// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

function getBusinesses(db = connection) {
  return (
    db('businesses')
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
      // TODO: I'm not sure what the intent is here, it looks like you're making a copy of each business
      // but those business objects should have been created just for this purpose. If there's something
      // non-obvious happening here, then a comment would be good
      .then((businesses) => {
        return businesses.map((business) => {
          return {
            ...business,
          }
        })
      })
  )
}

module.exports = {
  getBusinesses,
}
