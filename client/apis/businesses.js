import request from 'superagent'

export function fetchBusinesses() {
  return request.get('/api/v1/businesses').then((res) => {
    console.log('from apiClient', res.body)
    return res.body
  })
}
