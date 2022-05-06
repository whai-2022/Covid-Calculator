import api from '../apis'

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'

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
        console.log(err)
      })
  }
}
