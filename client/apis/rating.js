import request from 'superagent'

export function setRating(id, score) {
  return request
    .post(`/api/v1/rating/`)
    .send({ id, score })
    .then((res) => {
      res
    })
}
