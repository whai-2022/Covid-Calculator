import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import Rating from '../Rating'

import { testBusinesses } from '../../../__mockData__/businesses'
import { testBusiness } from '../../../__mockData__/business'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { businesses: testBusinesses }
  }),
  dispatch: jest.fn(),
}

describe('<Rating />', () => {
  it('renders the h1 title', () => {
    render(
      <Provider store={fakeStore}>
        <Router>
          <Rating safetyData={testBusiness} />
        </Router>
      </Provider>
    )
    expect.assertions(2)
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(/Rating/i)
    expect(screen.getAllByRole('heading')[0]).not.toHaveTextContent(
      'Weird No Words'
    )
  })
})
