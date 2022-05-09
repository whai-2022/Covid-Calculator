import * as businessApi from './business'
import * as businessesApi from './businesses'
import * as geocodingApi from './geocoding'
import * as ratingApi from './rating'

export default {
  ...businessApi,
  ...businessesApi,
  ...geocodingApi,
  ...ratingApi,
}
