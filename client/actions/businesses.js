import api from '../apis'

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'
export const SET_ERROR = 'SET_ERROR'

export function receiveBusinesses(businesses) {
  return {
    type: RECEIVE_BUSINESSES,
    payload: businesses,
  }
}

export function getBusinesses() {
  return (dispatch) => {
    return api
      .fetchBusinesses()
      .then((res) => {
        dispatch(receiveBusinesses(res))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
