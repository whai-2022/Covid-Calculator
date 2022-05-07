import request from 'superagent'

export function fetchBusinesses() {
  return request.get('/api/v1/businesses').then((res) => {
    return res.body
  })
}
