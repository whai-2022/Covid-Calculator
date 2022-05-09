import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import BusinessListingPage from '../BusinessListingPage'
import { testBusiness } from '../../../__mockData__/business'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { business: testBusiness }
  }),
  dispatch: jest.fn(),
}

describe('<BusinessListingPage/>', () => {
  it('renders the h1 title', () => {
    render(
      <Provider store={fakeStore}>
        <BusinessListingPage />
      </Provider>
    )
    expect.assertions(2)
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Business page')
    expect(screen.getAllByRole('heading')[0]).not.toHaveTextContent(
      'Weird No Words'
    )
  })
})
