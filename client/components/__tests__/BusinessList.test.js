import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, act } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import BusinessList from '../BusinessList'

import { testBusinesses } from '../../../__mockData__/businesses'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { businesses: testBusinesses }
  }),
  dispatch: jest.fn(),
}

describe('<CitiesSuburbs />', () => {
  it('renders the buttons', async () => {
    await act(async () => {
      render(
        <Provider store={fakeStore}>
          <Router>
            <BusinessList />
          </Router>
        </Provider>
      )
    })
    expect.assertions(1)
    expect(screen.getAllByRole('button')[0]).toHaveTextContent(/Alphabetical/i)
  })

  it('changes the state correctly when clicked', async () => {
    await act(async () => {
      render(
        <Provider store={fakeStore}>
          <Router initialEntries={['/cities/auckland/grey-lynn']}>
            <BusinessList />
          </Router>
        </Provider>
      )
    })
    expect.assertions(3)
    const button = screen.getAllByRole('button')[1]
    expect(button).toHaveTextContent(/Rating/i)
    expect(button).toHaveProperty('id', 'unselected')

    userEvent.click(button)
    expect(button).toHaveProperty('id', 'selected')
  })
})
