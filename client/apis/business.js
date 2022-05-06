import request from 'superagent'

export function getBusiness(id) {
  return request.get(`/api/v1/business/${id}`).then((res) => res.body)
}
