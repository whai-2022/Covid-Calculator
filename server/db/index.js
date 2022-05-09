const business = require('./business')
const businesses = require('./businesses')
const rating = require('./rating')

module.exports = {
  ...business,
  ...businesses,
  ...rating,
}
