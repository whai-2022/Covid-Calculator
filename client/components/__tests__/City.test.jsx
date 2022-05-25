import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from '../App'
import '../MapContainer'

jest.mock('../MapContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div aria-label="map"></div>
    },
  }
})

describe('<City />', () => {
  it('renders the h2 title', () => {
    render(
      <MemoryRouter initialEntries={['/cities/auckland']}>
        <App />
      </MemoryRouter>
    )
    expect.assertions(2)
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent(/Auckland/i)
    expect(screen.getAllByRole('heading')[1]).not.toHaveTextContent(
      'Weird No Words'
    )
  })
})
