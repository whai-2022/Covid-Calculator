import request from 'superagent'

export function postThumbUp(businessId) {
  console.log(businessId)
  return request
    .patch(`/api/v1/voting/thumbup`)
    .send({ businessId: businessId })
    .then((res) => res.body)
}

export function postThumbDown(businessId) {
  return request
    .patch('/api/v1/voting/thumbdown')
    .send({ businessId: businessId })
    .then((res) => res.body)
}
