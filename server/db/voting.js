const connection = require('./connection')

module.exports = {
  addThumbUp,
  addThumbDown,
}

function addThumbUp(id, db = connection) {
  return db('businesses').increment('reliability_positive', 1).where('id', id)
}

function addThumbDown(id, db = connection) {
  return db('businesses').increment('reliability_negative', 1).where('id', id)
}
