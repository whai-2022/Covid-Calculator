import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Auth0Login from '../Auth0Login.jsx'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

jest.mock('@auth0/auth0-react')

const fakeUser = {
  nickname: 'david',
  picture:
    'https://s.gravatar.com/avatar/e5e0845d8a5d6e90a0c4effb1dbc0854?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdk.png',
}

describe('<Auth0Login /> renders when user is authenticated', () => {
  it('should render login message', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        ...fakeUser,
      },
      logout: jest.fn(),
    })

    render(
      <Router>
        <Auth0Login />
      </Router>
    )
    const loginMessage = screen.getByLabelText('login message')
    expect(loginMessage).toHaveTextContent('Welcome back, david')
  })
  it('should render a sign-out button that calls the logout function when clicked', async () => {
    render(
      <Router>
        <Auth0Login />
      </Router>
    )
    const button = screen.getByRole('button', { name: /sign out/i })
    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(useAuth0().logout).toHaveBeenCalled()
  })
})

describe('<Auth0Login /> renders when user is not authenticated', () => {
  it('renders a sign-in button that calls the login function when clicked', async () => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    })
    render(
      <Router>
        <Auth0Login />
      </Router>
    )
    const button = screen.getByRole('button', { name: /sign in/i })
    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(useAuth0().loginWithRedirect).toHaveBeenCalled()
  })
})
