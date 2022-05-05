import { combineReducers } from 'redux'

import businessReducer from './business'

export default combineReducers({
  business: businessReducer,
})
