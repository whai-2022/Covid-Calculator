import api from '../apis'
import { setError, getBusinesses } from './index'

export function setRating(id, score) {
  return (dispatch) => {
    return api
      .setRating(id, score)
      .then(() => {
        dispatch(getBusinesses())
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
        console.log(err)
      })
  }
}
