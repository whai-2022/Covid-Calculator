import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import Breadcrumbs from '../Breadcrumbs'

describe('<Breadcrumbs />', () => {
  it('renders the breadcrumb', () => {
    render(
      <Router>
        <Breadcrumbs />
      </Router>
    )
    expect.assertions(1)
    expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument()
  })
})
