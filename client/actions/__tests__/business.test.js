import { fetchBusiness, RECEIVE_BUSINESS, SET_ERROR } from '../index'
import api from '../../apis'
import { testBusiness } from '../../../__mockData__/business'

jest.mock('../../apis')

const fakeDispatch = jest.fn()
api.getBusiness.mockReturnValue(Promise.resolve(testBusiness))

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  console.log.mockRestore()
})

describe('fetchBusiness', () => {
  it('calls api and dispatches results in action', () => {
    expect.assertions(1)
    return fetchBusiness(1)(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: RECEIVE_BUSINESS,
        business: testBusiness,
      })
    })
  })
  it('should return an error when api returns a rejected promise', () => {
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    api.getBusiness.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    expect.assertions(1)
    return fetchBusiness(1)(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ERROR,
        errMessage: 'Something went wrong',
      })
    })
  })
})
