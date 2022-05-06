import request from 'superagent'

export function fetchBusinesses() {
  return request.get('/api/v1/businesses').then((res) => {
    console.log(res.body)
    return res.body
  })
}
