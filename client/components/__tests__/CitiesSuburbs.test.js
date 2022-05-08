import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import CitiesSuburbs from '../CitiesSuburbs'

describe('<CitiesSuburbs />', () => {
  it('renders the h1 title', () => {
    render(
      <Router>
        <CitiesSuburbs />
      </Router>
    )
    expect.assertions(2)
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent(/Cities/i)
    expect(screen.getAllByRole('heading')[0]).not.toHaveTextContent(
      'Weird No Words'
    )
  })
})
