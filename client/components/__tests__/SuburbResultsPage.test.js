import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import SuburbResultsPage from '../SuburbResultsPage'
import { testBusinesses } from '../../../__mockData__/businesses'

// jest.mock('../../index.js')

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { businesses: testBusinesses }
  }),
  dispatch: jest.fn(),
}

describe('<SuburbResultsPage />', () => {
  it('renders the h2 title', () => {
    render(
      <Provider store={fakeStore}>
        <SuburbResultsPage />
      </Provider>
    )
    expect.assertions(2)
    // const businessNames = screen.getAllByRole('heading')
    // expect(businessNames[0].textContent).toContain('Sharons Hairdressing')
    // expect(businessNames).toHaveLength(6)

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Listings for Grey Lynn'
    )
    expect(screen.getByRole('heading')).not.toHaveTextContent('Weird No Words')
  })
})