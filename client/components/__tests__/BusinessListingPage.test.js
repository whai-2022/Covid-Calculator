import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
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
        <Router>
          <BusinessListingPage />
        </Router>
      </Provider>
    )
    expect.assertions(2)
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Info')
    expect(screen.getAllByRole('heading')[1]).not.toHaveTextContent(
      'Weird No Words'
    )
  })
})
