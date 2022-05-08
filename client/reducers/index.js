import { combineReducers } from 'redux'

import businessReducer from './business'
import businessesReducer from './businesses'

export default combineReducers({
  business: businessReducer,
  businesses: businessesReducer,
})
