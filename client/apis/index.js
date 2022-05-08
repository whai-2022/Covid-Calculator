import * as businessApi from './business'
import * as businessesApi from './businesses'
import * as geocodingApi from './geocoding'

export default {
  ...businessApi,
  ...businessesApi,
  ...geocodingApi,
}
