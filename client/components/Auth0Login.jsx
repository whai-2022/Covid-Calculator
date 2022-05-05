import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

const Login = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <div className="login">
      {isAuthenticated && (
        <p
          aria-label="login message"
          className="login-welcome"
        >{`Welcome back, ${user.nickname}`}</p>
      )}
      {isAuthenticated ? (
        <>
          <Button onClick={handleSignOut} colorScheme="teal" m={2}>
            Sign Out
          </Button>

          <img src={user.picture} className="avatar" />
        </>
      ) : (
        <Button
          onClick={handleSignIn}
          variant="outline"
          _hover={{ bg: 'teal.600', borderColor: 'teal.600', color: 'white' }}
          colorScheme="teal"
          m={2}
        >
          Business Sign In
        </Button>
      )}
    </div>
  )
}

export default Login
