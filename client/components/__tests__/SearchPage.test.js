import React from 'react'
import { screen, render } from '@testing-library/react'

import SearchPage from '../SearchPage'

describe ('<SearchPage/>', () => {
  it ('renders the h1 title', () => {
    render(<SearchPage/>)
    expect.assertions(2)
    expect (screen.getByRole('heading')) .toHaveTextContent('Search Results...')
    expect (screen.getByRole('heading')) .not.toHaveTextContent('Weird No Words')
  })
})