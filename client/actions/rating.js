import api from '../apis'

import { getBusinesses } from '../actions'

export function setRating(id, score) {
  return (dispatch) => {
    return api
      .setRating(id, score)
      .then(() => {
        dispatch(getBusinesses())
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
