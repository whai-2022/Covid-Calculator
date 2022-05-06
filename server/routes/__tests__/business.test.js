const request = require('supertest')
const server = require('../../server')
const db = require('../../db/business')

jest.mock('../../db/business')

import { testBusiness } from '../../../__mockData__/business'

afterAll(() => {
  jest.restoreAllMocks()
})

describe('GET /', () => {
  test('gets the pets from the given userId', () => {
    db.getBusinessById.mockReturnValue(Promise.resolve(testBusiness))

    return request(server)
      .get(`/api/v1/business/1`)
      .then((res) => {
        expect(res.body.name).toContain('Sharon')
      })
  })

  it('tests error in routes', () => {
    expect.assertions(1)
    db.getBusinessById.mockImplementation(() =>
      Promise.reject(new Error('not working'))
    )
    return request(server)
      .get(`/api/v1/business/1`)
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
