const connection = require(`./connection`)

module.exports = {
  getBusinessById,
}

function getBusinessById(id, db = connection) {
  // TODO: it feels like there's an undocumented distinction happening here
  //   1. getBusinessById - yields a row from businesses joined with safetyCriteria
  //   2. getBusinesses - yields just rows from businesses
  //
  // Perhaps you could communicate this difference in the names of the functions
  return db('businesses')
    .where('businesses.id', id)
    .join('safetyCriteria', 'businesses.id', 'safetyCriteria.business_id')
    .select('safetyCriteria.*', 'businesses.*')
    .first()
}
