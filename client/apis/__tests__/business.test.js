import nock from 'nock'
import { getBusiness } from '../business'

import { testBusiness } from '../../../__mockData__/business'

describe('GET /api/v1/business/:id', () => {
  test('Requests server route to get a random business object', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/business/1')
      .reply(200, testBusiness)

    const business = await getBusiness(1)
    expect(business.name).toContain('Sharon')
    scope.done()
  })
})
