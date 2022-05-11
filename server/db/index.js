const business = require('./business')
const businesses = require('./businesses')
const rating = require('./rating')
const voting = require('./voting')

module.exports = {
  ...business,
  ...businesses,
  ...rating,
  ...voting,
}
