const connection = require(`./connection`)

module.exports = {
  updateRating,
}

function updateRating(data, db = connection) {
  return db('businesses')
    .where('businesses.id', data.id)
    .update({ rating: data.score })
}
