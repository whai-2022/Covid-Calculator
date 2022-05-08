import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react'

import SuburbResultsPage from '../SuburbResultsPage'
import App from '../App'
import '../MapContainer'
import '../BusinessList'

import { testBusinesses } from '../../../__mockData__/businesses'

const fakeStore = {
  subscribe: jest.fn(),
  getState: jest.fn(() => {
    return { businesses: testBusinesses }
  }),
  dispatch: jest.fn(),
}

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
  it('renders the h1 title', () => {
    render(
      <Provider store={fakeStore}>
        <SuburbResultsPage />
      </Provider>
    )
    expect.assertions(2)
    expect(screen.getByRole('heading')).toHaveTextContent('Listings for')
    expect(screen.getByRole('heading')).not.toHaveTextContent('Weird Words')
  })
  it('renders a map', () => {
    render(
      <Provider store={fakeStore}>
        <SuburbResultsPage />
      </Provider>
    )
    expect.assertions(1)
    expect(screen.getByLabelText('map')).toBeInTheDocument()
  })
  it('renders a list of businesses', () => {
    render(
      <Provider store={fakeStore}>
        <SuburbResultsPage />
      </Provider>
    )
    expect.assertions(1)
    expect(screen.getByLabelText('businesses')).toBeInTheDocument()
  })
  it('renders the h1 title using correct params', () => {
    render(
      <Provider store={fakeStore}>
        <MemoryRouter initialEntries={['/cities/auckland/grey-lynn']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect.assertions(3)
    // expect(screen.getAllByText('Auckland')).toBeInTheDocument()
    const headingsHtml = screen.getAllByRole('heading')
    const headings = headingsHtml.map((heading) => {
      return heading.innerHTML
    })
    expect(headings[1]).toContain('Grey Lynn')
    expect(headings[1]).toContain('Auckland')
    expect(headings[1]).not.toContain('Ponsonby')
  })
})
