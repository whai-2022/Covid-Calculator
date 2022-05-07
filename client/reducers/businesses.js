import { RECEIVE_BUSINESSES } from '../actions'

const initialState = []
export default function businesses(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.payload
    default:
      return state
  }
}
