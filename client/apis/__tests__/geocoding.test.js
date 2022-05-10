import nock from 'nock'
import { fetchCoordinates } from '../geocoding'

describe('GET https://api.mapbox.com/', () => {
  it('returns a geolocation object from https://api.mapbox.com/', async () => {
    nock('https://api.mapbox.com/geocoding/v5')
      .get(
        `/mapbox.places/Grey%20Lynn%2C%20Auckland.json?country=nz&access_token=undefined`
      )
      .reply(200, {
        type: 'FeatureCollection',
        query: ['grey', 'lynn', 'auckland'],
      })

    const response = await fetchCoordinates('Grey Lynn, Auckland')
    expect(response.query[0]).toContain('grey')
  })
})
