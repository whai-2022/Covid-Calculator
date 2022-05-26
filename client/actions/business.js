import api from '../apis'
import { setError } from './index'

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'

export function receiveBusiness(business) {
  return {
    type: RECEIVE_BUSINESS,
    business: business,
  }
}

export function fetchBusiness(id) {
  return (dispatch) => {
    return api
      .getBusiness(id)
      .then((res) => {
        dispatch(receiveBusiness(res))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
