import api from '../apis'

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
        // TODO: How will the user know what is happening
        console.log(err)
      })
  }
}
