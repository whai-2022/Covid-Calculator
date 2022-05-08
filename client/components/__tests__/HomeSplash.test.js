import React from 'react'
import { screen, render, getAllByRole } from '@testing-library/react'

import HomeSplash from '../HomeSplash'

describe('<HomeSplash/>', () => {
  it.skip('renders a Heading', () => {
    render(
    <HomeSplash />
    )
    const headings = screen.contains('heading')
    console.log(headings)
    expect(headings).toHaveValue('lg')
  })
})
