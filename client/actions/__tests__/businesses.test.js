import { getBusinesses, RECEIVE_BUSINESSES, SET_ERROR } from '../index'
import api from '../../apis'
import { testBusinesses } from '../../../__mockData__/businesses'

jest.mock('../../apis')

const fakeDispatch = jest.fn()
api.fetchBusinesses.mockReturnValue(Promise.resolve(testBusinesses))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  console.log.mockRestore()
})

describe('getBusinesses', () => {
  it('calls api and dispatches results in action', () => {
    expect.assertions(1)
    return getBusinesses()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: RECEIVE_BUSINESSES,
        payload: testBusinesses,
      })
    })
  })
  it('should return an error when api returns a rejected promise', () => {
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    api.fetchBusinesses.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(1)
    return getBusinesses()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ERROR,
        errMessage: 'Something went wrong',
      })
    })
  })
})
