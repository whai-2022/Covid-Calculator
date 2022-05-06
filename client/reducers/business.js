import { RECEIVE_BUSINESS } from '../actions'

const initialState = {}
export default function business(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return action.business
    default:
      return state
  }
}
