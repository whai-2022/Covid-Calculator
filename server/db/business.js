const connection = require(`./connection`)

module.exports = {
  getBusinessAndSafetyInfoById,
}

function getBusinessAndSafetyInfoById(id, db = connection) {
  return db('businesses')
    .where('businesses.id', id)
    .join('safety_criteria', 'businesses.id', 'safety_criteria.business_id')
    .select(
      'safety_criteria.*',
      'businesses.*',
      'reliability_positive as reliabilityPositive',
      'reliability_negative as reliabilityNegative'
    )
    .first()
}
