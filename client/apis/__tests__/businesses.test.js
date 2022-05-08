import nock from 'nock'
import { testBusinesses } from '../../../__mockData__/businesses'
import { fetchBusinesses } from '../businesses'

describe('GET /api/v1/businesses', () => {
  it('returns businesses from /api/v1/businesses', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/businesses')
      .reply(200, testBusinesses)

    const [{ id: id1, name: name1 }, { id: id2, name: name2 }] =
      await fetchBusinesses()
    expect(id1).toBe(1)
    expect(name1).toContain('Hairdressing')
    expect(id2).toBe(2)
    expect(name2).toContain('Hardware')
    scope.done()
  })
})
