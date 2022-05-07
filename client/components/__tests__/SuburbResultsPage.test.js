import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import SuburbResultsPage from '../SuburbResultsPage'
import { testBusinesses } from '../../../__mockData__/businesses'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { businesses: testBusinesses }
  }),
  dispatch: jest.fn(),
}

describe('<SuburbResultsPage />', () => {
  it('renders the h1 title', () => {
    render(
      <Provider store={fakeStore}>
        <SuburbResultsPage />
      </Provider>
    )
    expect.assertions(2)
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Sharons Hairdressing'
    )
    expect(screen.getByRole('heading')).not.toHaveTextContent('brisket')
  })
})
