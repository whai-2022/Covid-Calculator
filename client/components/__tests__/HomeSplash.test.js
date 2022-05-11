import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import HomeSplash from '../HomeSplash'

describe('<HomeSplash/>', () => {
  it('renders a Heading', () => {
    render(
      <BrowserRouter>
        <HomeSplash />{' '}
      </BrowserRouter>
    )
    const headingsHtml = screen.getAllByRole('heading')
    const headings = headingsHtml.map((heading) => {
      return heading.innerHTML
    })
    expect.assertions(2)
    expect(headings[0]).toContain('Covid Calculator')
    expect(headings[1]).toContain('Wherever you are')
  })
})
