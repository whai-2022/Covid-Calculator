const request = require('supertest')
const server = require('../../server')
const db = require('../../db')

jest.mock('../../db')

import { testBusiness } from '../../../__mockData__/business'

afterAll(() => {
  jest.restoreAllMocks()
})

describe('GET /', () => {
  test('gets the business with the given id', () => {
    db.getBusinessAndSafetyInfoById.mockReturnValue(
      Promise.resolve(testBusiness)
    )

    return request(server)
      .get(`/api/v1/business/1`)
      .then((res) => {
        expect(res.body.name).toContain('Sharon')
      })
  })

  it('tests error in routes', () => {
    expect.assertions(1)
    db.getBusinessAndSafetyInfoById.mockImplementation(() =>
      Promise.reject(new Error('not working'))
    )
    return request(server)
      .get(`/api/v1/business/1`)
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
