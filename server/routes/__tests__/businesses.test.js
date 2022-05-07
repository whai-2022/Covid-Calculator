const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

jest.mock('../../db')

import { testBusinesses } from '../../../__mockData__/businesses'

afterAll(() => {
  jest.restoreAllMocks()
})

describe('GET /', () => {
  test('gets all businesses', () => {
    db.getBusinesses.mockReturnValue(Promise.resolve(testBusinesses))
    return request(server)
      .get(`/api/v1/businesses`)
      .then((res) => {
        expect(res.body[0].name).toContain('Hairdressing')
      })
  })

  it('tests error in routes', () => {
    expect.assertions(1)
    db.getBusinesses.mockImplementation(() =>
      Promise.reject(new Error('Route error'))
    )
    return request(server)
      .get(`/api/v1/businesses`)
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
