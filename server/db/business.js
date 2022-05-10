const connection = require(`./connection`)

module.exports = {
  getBusinessById,
}

function getBusinessById(id, db = connection) {
  return db('businesses')
    .where('businesses.id', id)
    .join('safetyCriteria', 'businesses.id', 'safetyCriteria.business_id')
    .select(
      'safetyCriteria.*',
      'businesses.*',
      'reliability_positive as reliabilityPositive',
      'reliability_negative as reliabilityNegative'
    )
    .first()
}
