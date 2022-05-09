import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SuburbResultsPage from '../SuburbResultsPage'
import App from '../App'
import '../MapContainer'
import '../BusinessList'

import { testBusinesses } from '../../../__mockData__/businesses'
import api from '../../apis'

jest.mock('../../apis')

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { businesses: testBusinesses }
  }),
  dispatch: jest.fn(),
}

beforeAll(() => {
  api.fetchCoordinates.mockReturnValue(
    Promise.resolve({ features: [{ center: [0, 0] }] })
  )
})

jest.mock('../MapContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div aria-label="map"></div>
    },
  }
})

jest.mock('../BusinessList', () => {
  return {
    __esModule: true,
    default: () => {
      return <div aria-label="businesses"></div>
    },
  }
})

describe('<SuburbResultsPage />', () => {
  it('renders the h1 title', async () => {
    await act(async () => {
      render(
        <Provider store={fakeStore}>
          <SuburbResultsPage />
        </Provider>
      )
    })
    expect.assertions(2)
    expect(screen.getByRole('heading')).toHaveTextContent('Listings for')
    expect(screen.getByRole('heading')).not.toHaveTextContent('Weird Words')
  })
  it('renders a map', async () => {
    await act(async () => {
      render(
        <Provider store={fakeStore}>
          <SuburbResultsPage />
        </Provider>
      )
    })
    expect.assertions(1)
    expect(screen.getByLabelText('map')).toBeInTheDocument()
  })
  it('renders a list of businesses', async () => {
    await act(async () => {
      render(
        <Provider store={fakeStore}>
          <SuburbResultsPage />
        </Provider>
      )
    })
    expect.assertions(1)
    expect(screen.getByLabelText('businesses')).toBeInTheDocument()
  })
  it('renders the h1 title using correct params', async () => {
    await act(async () => {
      render(
        <Provider store={fakeStore}>
          <MemoryRouter initialEntries={['/cities/auckland/grey-lynn']}>
            <App />
          </MemoryRouter>
        </Provider>
      )
    })

    expect.assertions(3)
    const headingsHtml = screen.getAllByRole('heading')
    const headings = headingsHtml.map((heading) => {
      return heading.innerHTML
    })
    expect(headings[1]).toContain('Grey Lynn')
    expect(headings[1]).toContain('Auckland')
    expect(headings[1]).not.toContain('Ponsonby')
  })
  it.only('displays the businesses with the category chosen in CategorySelector', async () => {
    render(
      <Provider store={fakeStore}>
        <MemoryRouter initialEntries={['/cities/auckland/grey-lynn']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    userEvent.selectOptions(screen.getByRole('select', { value: 'cafe' }))
    expect(screen.getByRole('select', { value: 'cafe' }).selected).toBe(true)
    screen.debug()
  })
})
