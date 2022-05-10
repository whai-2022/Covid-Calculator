import React from 'react'
import { screen, render } from '@testing-library/react'

import HomeSplash from '../HomeSplash'

describe('<HomeSplash/>', () => {
  it('renders a Heading', () => {
    render(<HomeSplash />)
    const headingsHtml = screen.getAllByRole('heading')
    const headings = headingsHtml.map((heading) => {
      return heading.innerHTML
    })
    expect.assertions(2)
    expect(headings[0]).toContain('Wherever you are')
    expect(headings[1]).toContain('Dan')
  })
})
