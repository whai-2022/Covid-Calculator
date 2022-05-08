import request from 'superagent'

const access_token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

export function fetchCoordinates(location) {
  const locationEncoded = encodeURIComponent(location)
  console.log(locationEncoded)
  return request
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationEncoded}.json?country=nz&access_token=${access_token}`
    )
    .then((res) => {
      return res.body
    })
}
